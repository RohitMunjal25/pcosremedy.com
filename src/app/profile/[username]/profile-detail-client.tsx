"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";
import { MessageCircle, Share2, ExternalLink, Building2, Globe, Check } from "lucide-react";
import { useState } from "react";

interface ProfileDetailClientProps {
  post: any;
  suggestedArticles: any[];
  breadcrumbData: any;
}

export function ProfileDetailClient({ post, suggestedArticles, breadcrumbData }: ProfileDetailClientProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const sanitizeRichHtml = (html: string) =>
    html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
      .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, "")
      .replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "")
      .replace(/\shref\s*=\s*(['"])javascript:.*?\1/gi, ' href="#"');

  const formatRichHtml = (raw?: string | null, fallback = "Profile details will appear here once available.") => {
    const source = typeof raw === "string" ? raw.trim() : "";
    if (!source) return `<p>${escapeHtml(fallback)}</p>`;
    if (/<[a-z][\s\S]*>/i.test(source)) return sanitizeRichHtml(source);
    return source
      .split(/\n{2,}/)
      .map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\n/g, " ").trim())}</p>`)
      .join("");
  };

  const descriptionHtml = formatRichHtml(description);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const handleComment = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Main Profile Card - Reference Layout */}
        <Card className="overflow-hidden border border-border/60 bg-white shadow-sm">
          {/* Card Header with Title and Meta */}
          <CardHeader className="border-b border-border/50 px-6 py-6 sm:px-8 sm:py-8">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {brandName}
            </h1>
            
            {/* Meta Row - Similar to reference */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {/* Source/Author with icon */}
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-[#76A13B]" />
                <span className="font-medium text-foreground/80">{SITE_CONFIG.name}</span>
              </div>
              
              {/* Separator */}
              <span className="hidden text-border sm:inline">|</span>
              
              {/* Action icons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleComment}
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                  title="Comments"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Comment</span>
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                  title={copied ? "Copied!" : "Share"}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[#76A13B]" />
                  ) : (
                    <Share2 className="h-4 w-4" />
                  )}
                  <span>{copied ? "Copied!" : "Share"}</span>
                </button>
              </div>
            </div>
          </CardHeader>
          
          {/* Card Body */}
          <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
            {/* Logo and Description Row */}
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              {/* Logo/Image - Left side */}
              <div className="flex-shrink-0">
                <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-border/50 bg-muted sm:h-28 sm:w-28">
                  {logoUrl ? (
                    <ContentImage 
                      src={logoUrl} 
                      alt={post.title} 
                      fill 
                      className="object-cover" 
                      sizes="112px" 
                      intrinsicWidth={112} 
                      intrinsicHeight={112} 
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
                      {post.title.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content - Right side */}
              <div className="flex-1">
                {/* Description */}
                <article
                  className="prose prose-slate max-w-none text-base leading-relaxed text-foreground/90 prose-p:my-3 prose-a:text-[#1AAAD1] prose-a:underline prose-a:underline-offset-2 prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
                
                {/* Website Link - Similar to reference URL */}
                {website && (
                  <div className="mt-5">
                    <Link 
                      href={website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#1AAAD1] underline underline-offset-2 transition-colors hover:text-[#0a6b82]"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      {domain || website}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            {/* Footer CTA Section */}
            {website && (
              <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground">
                  Explore more about {brandName}
                </p>
                <Button 
                  asChild 
                  className="bg-[#76A13B] px-6 text-sm font-medium text-white shadow-sm hover:bg-[#658d34]"
                >
                  <Link href={website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Suggested Articles Section */}
        {suggestedArticles.length ? (
          <section className="mt-10">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Related Articles</h2>
              <Link 
                href="/articles" 
                className="text-sm font-medium text-[#76A13B] underline-offset-4 hover:underline"
              >
                View all
              </Link>
            </div>
            
            {/* Article Cards in Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {suggestedArticles.slice(0, 3).map((article) => (
                <Card 
                  key={article.id} 
                  className="overflow-hidden border border-border/60 bg-white transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 bg-[#e8f2e0] text-[#2d3a28] hover:bg-[#e8f2e0]">
                      Article
                    </Badge>
                    <Link
                      href={buildPostUrl("article", article.slug)}
                      className="group block"
                    >
                      <h3 className="line-clamp-2 font-medium text-foreground transition-colors group-hover:text-[#76A13B]">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {article.summary || "Read more about this topic..."}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Browse More Link */}
            <div className="mt-6 text-center">
              <Link 
                href="/profile" 
                className="inline-flex items-center gap-1 text-sm font-medium text-[#1AAAD1] underline-offset-4 hover:underline"
              >
                Browse all profiles
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
