import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export function CalculatorSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-8">
              <Calculator className="w-12 h-12" aria-label="Calculadora de viabilidade de Alojamento Local" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Quer saber se o seu AL compensa financeiramente?
            </h2>
            
            <p className="text-xl mb-8 text-orange-100">
              Use a nossa calculadora gratuita para avaliar a viabilidade do seu projeto 
              antes de avançar com o registo.
            </p>
            
            <button className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-lg">
            <a 
              href="https://calculadoraal.pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-lg"
            >
              <span>Experimente a Calculadora AL</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
  )
}
  )
}
  )
}