import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaFacebook as Facebook, FaInstagram as Instagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 md:py-12 mt-auto bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Kamran Hasan
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Building modern web experiences.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kkamranhhasan"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kkamranhhasan/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-500 transition-colors hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/L2724O"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors hover:scale-110"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://instagram.com/munshionik_"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-pink-500 transition-colors hover:scale-110"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="mailto:kkamranhhasan@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Kamran Hasan. All rights reserved.
      </div>
    </footer>
  );
}
