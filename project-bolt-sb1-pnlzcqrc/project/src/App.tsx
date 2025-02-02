import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Target, Brain, Activity, Award, BarChart } from 'lucide-react';

type TabType = 'objectives' | 'diagnosis' | 'schedule' | 'resources' | 'methods' | 'tracking' | 'wellness' | 'evaluations';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('objectives');

  const tabs = [
    { id: 'objectives', label: 'Objetivos', icon: Target },
    { id: 'diagnosis', label: 'Diagnóstico', icon: Activity },
    { id: 'schedule', label: 'Cronograma', icon: Calendar },
    { id: 'resources', label: 'Recursos', icon: BookOpen },
    { id: 'methods', label: 'Métodos', icon: Brain },
    { id: 'tracking', label: 'Acompanhamento', icon: BarChart },
    { id: 'wellness', label: 'Bem-Estar', icon: Award },
    { id: 'evaluations', label: 'Avaliações', icon: Clock }
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'objectives':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Definição de Objetivos</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium mb-2">Objetivo Principal</h4>
                <textarea 
                  className="w-full p-2 border rounded-md"
                  placeholder="Digite seu objetivo principal..."
                  rows={3}
                />
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium mb-2">Metas de Curto Prazo</h4>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Adicionar meta de curto prazo..."
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-medium mb-2">Metas de Longo Prazo</h4>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Adicionar meta de longo prazo..."
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Cronograma de Estudos</h3>
            <div className="grid grid-cols-7 gap-4">
              {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                <div key={day} className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-medium mb-2">{day}</h4>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Manhã</div>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Atividade..."
                    />
                    <div className="text-sm text-gray-600">Tarde</div>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Atividade..."
                    />
                    <div className="text-sm text-gray-600">Noite</div>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded-md text-sm"
                      placeholder="Atividade..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      // Add other tab contents as needed
      default:
        return <div>Conteúdo em desenvolvimento</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Plano de Estudos</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;