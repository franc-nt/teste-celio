const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gestor de Áreas - Plataforma de Negociação de Terrenos</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #1a5f2a 0%, #2d8a4e 50%, #1a5f2a 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .hero p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 40px;
          opacity: 0.95;
        }
        .btn {
          display: inline-block;
          padding: 15px 40px;
          background: #f5a623;
          color: #1a1a1a;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          font-size: 1.1rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        /* Stats Section */
        .stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          padding: 60px 20px;
          background: #f8f9fa;
          flex-wrap: wrap;
        }
        .stat-item {
          text-align: center;
        }
        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #1a5f2a;
        }
        .stat-label {
          font-size: 1rem;
          color: #666;
        }

        /* Features Section */
        .features {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .features h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 60px;
          color: #1a5f2a;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        .feature-card {
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 5px 30px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-10px);
        }
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: #1a5f2a;
        }
        .feature-card p {
          color: #666;
        }

        /* How it Works */
        .how-it-works {
          background: #1a5f2a;
          color: white;
          padding: 80px 20px;
        }
        .how-it-works h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 60px;
        }
        .steps {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto;
        }
        .step {
          text-align: center;
          flex: 1;
          min-width: 200px;
        }
        .step-number {
          width: 60px;
          height: 60px;
          background: #f5a623;
          color: #1a1a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 20px;
        }
        .step h3 {
          margin-bottom: 10px;
        }
        .step p {
          opacity: 0.9;
          font-size: 0.95rem;
        }

        /* Analytics Section */
        .analytics {
          padding: 80px 20px;
          background: #f8f9fa;
        }
        .analytics-content {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .analytics h2 {
          font-size: 2.2rem;
          color: #1a5f2a;
          margin-bottom: 20px;
        }
        .analytics p {
          color: #666;
          margin-bottom: 20px;
        }
        .analytics ul {
          list-style: none;
        }
        .analytics li {
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
          color: #555;
        }
        .analytics li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #1a5f2a;
          font-weight: bold;
        }
        .chart-placeholder {
          background: white;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 30px rgba(0,0,0,0.1);
        }
        .chart-bar {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .chart-label {
          width: 80px;
          font-size: 0.9rem;
          color: #666;
        }
        .chart-fill {
          height: 30px;
          background: linear-gradient(90deg, #1a5f2a, #2d8a4e);
          border-radius: 5px;
          position: relative;
        }
        .chart-value {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          font-weight: bold;
          font-size: 0.85rem;
        }

        /* CTA Section */
        .cta {
          padding: 100px 20px;
          text-align: center;
          background: linear-gradient(135deg, #2d8a4e 0%, #1a5f2a 100%);
          color: white;
        }
        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .cta p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        /* Footer */
        footer {
          background: #1a1a1a;
          color: white;
          padding: 40px 20px;
          text-align: center;
        }
        footer p {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          .analytics-content {
            grid-template-columns: 1fr;
          }
          .stats {
            gap: 30px;
          }
        }
      </style>
    </head>
    <body>

      <section class="hero">
        <h1>Gestor de Áreas</h1>
        <p>A plataforma que conecta corretores de todo o Brasil a empresas interessadas em adquirir terrenos para loteamentos, com dados estatísticos de valorização em tempo real.</p>
        <a href="#contato" class="btn">Solicite uma Demonstração</a>
      </section>

      <section class="stats">
        <div class="stat-item">
          <div class="stat-number">2.500+</div>
          <div class="stat-label">Áreas Cadastradas</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">850+</div>
          <div class="stat-label">Corretores Parceiros</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">R$ 2.1B</div>
          <div class="stat-label">Em Negociações</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">27</div>
          <div class="stat-label">Estados Atendidos</div>
        </div>
      </section>

      <section class="features">
        <h2>Por que escolher o Gestor de Áreas?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🗺️</div>
            <h3>Banco de Áreas Nacional</h3>
            <p>Acesse milhares de terrenos cadastrados por corretores de todas as regiões do Brasil, com informações detalhadas e documentação verificada.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Análise de Valorização</h3>
            <p>Dados estatísticos precisos sobre valorização de áreas após loteamentos, histórico de vendas e projeções de mercado.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Conexão Direta</h3>
            <p>Conectamos empresas loteadoras diretamente aos corretores proprietários das áreas, sem intermediários.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Relatórios Inteligentes</h3>
            <p>Gere relatórios completos de viabilidade, comparativos de mercado e análise de potencial de cada área.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Segurança Jurídica</h3>
            <p>Verificação de documentação, certidões e situação legal das áreas antes de disponibilizá-las na plataforma.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Agilidade nas Negociações</h3>
            <p>Ferramentas que aceleram o processo de negociação, desde a proposta inicial até o fechamento do negócio.</p>
          </div>
        </div>
      </section>

      <section class="how-it-works">
        <h2>Como Funciona</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Corretores Cadastram</h3>
            <p>Corretores de todo o país cadastram suas áreas com informações detalhadas e documentação.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Análise Automatizada</h3>
            <p>Nossa plataforma analisa e gera dados estatísticos de valorização e potencial de loteamento.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Empresas Encontram</h3>
            <p>Loteadoras e incorporadoras buscam áreas com filtros avançados e dados de mercado.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Negócio Fechado</h3>
            <p>Facilitamos toda a negociação até a conclusão do negócio com segurança.</p>
          </div>
        </div>
      </section>

      <section class="analytics">
        <div class="analytics-content">
          <div>
            <h2>Dados que Geram Resultados</h2>
            <p>Nossa plataforma oferece análises estatísticas completas para que você tome decisões baseadas em dados reais do mercado imobiliário.</p>
            <ul>
              <li>Histórico de valorização por região</li>
              <li>Comparativo de preço por m² em loteamentos</li>
              <li>Tempo médio de venda de lotes</li>
              <li>Projeção de retorno sobre investimento</li>
              <li>Análise de demanda por tipo de terreno</li>
              <li>Indicadores de crescimento urbano</li>
            </ul>
          </div>
          <div class="chart-placeholder">
            <h3 style="margin-bottom: 30px; color: #1a5f2a;">Valorização Média por Região</h3>
            <div class="chart-bar">
              <span class="chart-label">Sudeste</span>
              <div class="chart-fill" style="width: 85%;"><span class="chart-value">+127%</span></div>
            </div>
            <div class="chart-bar">
              <span class="chart-label">Sul</span>
              <div class="chart-fill" style="width: 75%;"><span class="chart-value">+98%</span></div>
            </div>
            <div class="chart-bar">
              <span class="chart-label">Centro-O.</span>
              <div class="chart-fill" style="width: 80%;"><span class="chart-value">+112%</span></div>
            </div>
            <div class="chart-bar">
              <span class="chart-label">Nordeste</span>
              <div class="chart-fill" style="width: 70%;"><span class="chart-value">+89%</span></div>
            </div>
            <div class="chart-bar">
              <span class="chart-label">Norte</span>
              <div class="chart-fill" style="width: 65%;"><span class="chart-value">+76%</span></div>
            </div>
            <p style="margin-top: 20px; font-size: 0.85rem; color: #666;">*Valorização média após loteamento nos últimos 5 anos</p>
          </div>
        </div>
      </section>

      <section class="cta" id="contato">
        <h2>Pronto para Transformar seu Negócio?</h2>
        <p>Junte-se a centenas de empresas e corretores que já utilizam o Gestor de Áreas.</p>
        <a href="mailto:contato@gestordeareas.com.br" class="btn">Entre em Contato</a>
      </section>

      <footer>
        <p>&copy; 2025 Gestor de Áreas. Todos os direitos reservados.</p>
      </footer>

    </body>
    </html>
  `);
});

app.listen(61999, () => {
  console.log('Servidor rodando em http://localhost:61999');
});
