'use client';

import React from 'react';
import { X, Shield } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 text-zinc-200 p-4 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-400 hover:text-white bg-zinc-800 border border-zinc-700"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#c89f56] text-xs font-mono tracking-widest uppercase mb-2 pr-12">
          <Shield className="w-4 h-4 shrink-0" />
          <span className="truncate">LEGAL & COMPLIANCE DISCLOSURE</span>
        </div>

        <h3 id="legal-modal-title" className="text-lg sm:text-2xl font-medium text-white mb-4 sm:mb-6 pr-8">
          {type === 'privacy' ? 'Privacy & Data Protection Policy' : 'Terms & Professional Engagement Conditions'}
        </h3>

        <div className="space-y-4 text-sm text-zinc-400 leading-relaxed font-normal">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Confidentiality of Client Records:</strong> DSI Business Solutions adheres to strict professional confidentiality standards regarding all accounting ledgers, income tax records, GST returns, and property title documents submitted by prospective and active clients.
              </p>
              <p>
                <strong>2. Use of Information:</strong> Contact details and requirements submitted through this website are utilized solely for responding to professional inquiries, conducting conflict checks, and providing advisory quotations. We do not sell or distribute client information to third parties.
              </p>
              <p>
                <strong>3. Regulatory Compliance:</strong> Client records are maintained in accordance with statutory record-retention requirements under Indian corporate and tax laws (including the Income-tax Act, 1961 and Companies Act, 2013).
              </p>
              <p className="text-xs text-zinc-500 pt-2 border-t border-zinc-800 italic">
                Note: This privacy disclosure serves as the preliminary MVP policy for DSI Business Solutions. Official engagement contracts include formal Non-Disclosure Agreements (NDAs).
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Professional Retainer:</strong> Submission of an enquiry form or initial electronic correspondence does not constitute the creation of a formal auditor-client or consultant-client fiduciary relationship until a formal Letter of Engagement is countersigned.
              </p>
              <p>
                <strong>2. Regulatory Scope:</strong> Accounting, tax computation, ROC secretarial filings, and deed documentation are executed based on truthful and verifiable source documentation provided by the client.
              </p>
              <p>
                <strong>3. Jurisdiction:</strong> Any dispute arising from advisory services rendered shall be subject to the exclusive jurisdiction of the competent courts in India.
              </p>
              <p className="text-xs text-zinc-500 pt-2 border-t border-zinc-800 italic">
                Note: These terms outline standard practice engagement protocols for DSI Business Solutions MVP website.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 sm:mt-8 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
