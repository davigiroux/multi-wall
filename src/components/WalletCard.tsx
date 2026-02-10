import type { ReactNode } from 'react';

export function WalletCard({
  label,
  iconLetter,
  iconColor,
  textColor,
  children,
}: {
  label: string;
  iconLetter: string;
  iconColor: string;
  textColor: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${iconColor} flex items-center justify-center`}>
            <span className={`${textColor} font-bold`}>{iconLetter}</span>
          </div>
          <span className="font-medium text-gray-700">{label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
