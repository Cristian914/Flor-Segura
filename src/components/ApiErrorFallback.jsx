import React from 'react';
import { FaExclamationTriangle, FaWifi } from 'react-icons/fa';

export default function ApiErrorFallback({ message = "Serviço temporariamente indisponível", onRetry }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
      <FaWifi className="text-yellow-500 text-3xl mx-auto mb-3" />
      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
        Conectividade Limitada
      </h3>
      <p className="text-yellow-700 mb-4">
        {message}. Você pode continuar usando o app offline.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Tentar Novamente
        </button>
      )}
    </div>
  );
}