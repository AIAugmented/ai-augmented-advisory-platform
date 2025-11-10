import { Check, X } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";

import {
  TABLE_OF_CONTENTS,
  TERMS_META,
  TERMS_OF_SERVICE_SECTIONS,
  type TermsItem,
  type TermsSubsection,
} from "@/constants/termsOfService";

export default function TermsOfService() {
  // Helper function to render icon based on item type
  const renderIcon = (type?: "check" | "cross" | "bullet") => {
    if (type === "check") {
      return (
        <Check className="mt-1 size-4 shrink-0 whitespace-nowrap text-green-500" />
      );
    }
    if (type === "cross") {
      return (
        <X className="mt-1 size-4 shrink-0 whitespace-nowrap text-red-500" />
      );
    }
    return null;
  };

  // Helper function to render content (string or array)
  const renderContent = (content?: string | string[]) => {
    if (Array?.isArray(content)) {
      return (
        <div className="space-y-2.5">
          {content?.map((paragraph, index) =>
            index === 0 ? (
              <h5 key={index}>{paragraph}</h5>
            ) : (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ),
          )}
        </div>
      );
    }
    return content ? <p className="text-muted-foreground">{content}</p> : null;
  };

  // Helper function to render terms items
  const renderItems = (items?: TermsItem[]) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="space-y-2.5">
        {items.map((item, index) => {
          const hasIcon = item.type === "check" || item.type === "cross";

          return (
            <div
              key={index}
              className={hasIcon ? "ml-5 flex items-start gap-2.5" : ""}
            >
              {hasIcon && renderIcon(item.type)}
              <div className="flex-1 space-y-2.5">
                {item.label && <h6>{item.label}</h6>}
                {item?.text && item.type !== "bullet" && (
                  <p className="text-muted-foreground">{item.text}</p>
                )}

                {/* Bullet type */}
                {item?.type === "bullet" && (
                  <ul className="ml-6 space-y-2.5">
                    <li className="list-inside list-disc text-muted-foreground">
                      {item.text}
                    </li>
                  </ul>
                )}

                {/* Items (can coexist with example) */}
                {item?.items && renderItems(item.items)}

                {/* Example (can coexist with items) */}
                {item?.example && (
                  <div className="space-y-2.5 rounded-lg bg-muted/30 p-5">
                    {item.example.label && <p>{item.example.label}</p>}
                    {item.example.items && renderItems(item.example.items)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Helper function to render table
  const renderTable = (table?: { headers: string[]; rows: string[][] }) => {
    if (!table) return null;

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              {table.headers.map((header, index) => (
                <th key={index} className="p-2.5 text-left font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border/50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2.5 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Helper function to render subsections
  const renderSubsections = (subsections?: TermsSubsection[]) => {
    if (!subsections || subsections.length === 0) return null;

    return (
      <div className="space-y-2.5">
        {subsections.map(subsection => (
          <div key={subsection.id} className="space-y-2.5">
            {subsection.title && <h5>{subsection.title}</h5>}
            {renderContent(subsection.content)}
            {renderItems(subsection.items)}
            {renderTable(subsection.table)}
            {subsection.afterContent && (
              <p className="text-muted-foreground">{subsection.afterContent}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-width space-y-10 py-10">
      {/* Hero Section */}
      <section className="space-y-5 border-b border-border pb-10 text-center">
        <h1>Terms of Service</h1>
        <div className="space-y-2.5">
          <p className="text-muted-foreground">
            Effective Date:{" "}
            <span className="font-semibold">{TERMS_META.effectiveDate}</span>
          </p>
          <p className="text-muted-foreground">
            Company: <span className="font-semibold">{TERMS_META.company}</span>{" "}
            | Service:{" "}
            <span className="font-semibold">{TERMS_META.service}</span> |
            Contact: <span className="font-semibold">{TERMS_META.contact}</span>
          </p>
        </div>
      </section>

      {/* Table of Content Section */}
      <section className="space-y-5">
        <Card className="p-5">
          <h3>Table of Contents</h3>
          <ul className="ml-6 space-y-2.5">
            {TABLE_OF_CONTENTS.map(item => (
              <li
                key={item.id}
                className="list-inside list-disc text-muted-foreground"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Terms Sections - Dynamically Rendered */}
      <section className="space-y-10">
        {TERMS_OF_SERVICE_SECTIONS.map(section => (
          <Card key={section.id} className="p-5">
            <h3>
              {section.id}. {section.title}
            </h3>
            {renderContent(section.content)}
            {renderSubsections(section.subsections)}
          </Card>
        ))}
      </section>

      {/* Contact Section */}
      <Card className="p-5 text-center">
        <h3>Questions About Terms?</h3>
        <p className="text-muted-foreground">
          For questions about these Terms of Service, contact us at:
        </p>
        <Link
          href={`mailto:${TERMS_META.contact}`}
          className="transition-colors hover:text-primary/80"
        >
          {TERMS_META.contact}
        </Link>
        <p className="text-sm text-muted-foreground">
          Last Updated: {TERMS_META.lastUpdated} | Next Review:{" "}
          {TERMS_META.nextReview}
        </p>
      </Card>
    </div>
  );
}
