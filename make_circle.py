import sys
try:
    from PIL import Image, ImageDraw
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image, ImageDraw

def create_circular_icon(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    min_dim = min(img.size)
    left = (img.size[0] - min_dim) / 2
    top = (img.size[1] - min_dim) / 2
    right = (img.size[0] + min_dim) / 2
    bottom = (img.size[1] + min_dim) / 2
    img = img.crop((left, top, right, bottom))
    
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + img.size, fill=255)
    
    img.putalpha(mask)
    
    # Use LANCZOS if available, else ANTIALIAS
    resample = getattr(Image, "Resampling", Image)
    resample_filter = getattr(resample, "LANCZOS", getattr(Image, "ANTIALIAS", 1))
    
    img = img.resize((256, 256), resample_filter)
    img.save(output_path, "PNG")

create_circular_icon("public/profile.jpg", "src/app/icon.png")
