import type { ReactNode } from 'react';

const LOADING_SKELETON = <div className="h-8 bg-gray-200 rounded animate-pulse w-32" />;

export function BalanceCard({
  title,
  headerColor,
  connected,
  loading,
  error,
  children,
}: {
  title: string;
  headerColor: string;
  connected: boolean;
  loading: boolean;
  error: string | null;
  children: ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`${headerColor} px-6 py-4`}>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-6">
        {!connected ? (
          <p className="text-gray-500">Connect wallet to view balance</p>
        ) : loading ? (
          LOADING_SKELETON
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
