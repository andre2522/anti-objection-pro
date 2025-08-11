import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  LucideIcon, 
  ArrowUpRight, 
  CheckCircle2, 
  Lock, 
  TrendingUp, 
  XCircle, 
  Shield, 
  Zap, 
  Target, 
  Users, 
  Brain, 
  Calendar, 
  Rocket, 
  BarChart3, 
  Clock, 
  FileText,
  Star,
  Play,
  Megaphone,
  Award,
  BookOpen,
  Headphones,
  Map,
  CheckSquare,
  Monitor,
  Smartphone,
  MessageSquare,
  Copy,
  Send,
  Sparkles,
  ThumbsUp,
  Heart,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroGraphic from "@/assets/hero-graphic.png";
import mockupPhone from "@/assets/mockup-phone.png";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import camilaPhoto from "@/assets/testimonial-camila.jpg";
import joaoPhoto from "@/assets/testimonial-joao.jpg";
import { Countdown } from "@/components/Countdown";

const Index = () => {
  const target = Date.now() + 1000 * 60 * 60 * 24; // 24h

  return (
    <>
      <Helmet>
        <title>Anti-Objeção - Respostas prontas que viram "vou pensar" em "fechei!"</title>
        <meta
          name="description"
          content="Tenha na mão a resposta certa para qualquer objeção, no seu tom, pronta pra copiar e enviar — e fechar mais vendas todos os dias."
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Anti-Objeção - Respostas que fecham vendas" />
        <meta property="og:description" content="Transforme cada 'não' em 'sim' — em segundos." />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Anti-Objeção',
            description: 'Respostas prontas para vencer objeções e fechar mais vendas.',
            brand: 'Anti-Objeção',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'BRL',
              price: 'promo',
              availability: 'https://schema.org/InStock',
            },
          })}
        </script>
      </Helmet>

      <header className="w-full border-b border-border bg-background">
        <nav className="container mx-auto flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary" aria-hidden />
            <span className="font-display text-lg tracking-wide text-foreground">
              <span className="text-primary">Anti</span>
              -Objeção
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <a href="#solucao" className="story-link text-sm text-foreground">Solução</a>
            <a href="#prova" className="story-link text-sm text-foreground">Prova Social</a>
            <a href="#garantia" className="story-link text-sm text-foreground">Garantia</a>
            <a href="#oferta" className="story-link text-sm text-foreground">Oferta</a>
          </div>
          <div className="hidden md:block">
            <a href="#cta">
              <Button className="mj-cta-yellow text-lg px-8 py-4">
                QUERO MINHAS RESPOSTAS AGORA
                <ArrowUpRight className="ml-1" />
              </Button>
            </a>
          </div>
        </nav>
      </header>

      <main className="bg-background">
        {/* Hero Section */}
        <section className="mj-hero py-20">
          <div className="container mx-auto relative z-10">
            <div className="text-center space-y-8">
              {/* Logo/Branding */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="h-6 w-6 text-background" />
                </div>
                <div className="text-left">
                  <h2 className="font-display font-bold text-xl text-foreground">ANTI-OBJEÇÃO</h2>
                  <p className="text-sm text-muted-foreground">Respostas prontas que viram "vou pensar" em "fechei!"</p>
                </div>
              </div>

              {/* Main Headline - A/B Test A */}
              <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl text-foreground">
                TRANSFORME CADA <span className="text-red-500">"NÃO"</span> EM <span className="text-green-500">"SIM"</span> EM SEGUNDOS
              </h1>
              
              {/* Sub-headline */}
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Tenha na mão a resposta certa para qualquer objeção, no seu tom, pronta pra copiar e enviar — e fechar mais vendas todos os dias.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button className="mj-cta-yellow text-xl md:text-2xl px-12 py-6 w-full md:w-auto">
                  QUERO MINHAS RESPOSTAS AGORA
                </Button>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Lock className="text-primary" />
                    <span>Compra 100% segura</span>
                  </div>
                  <span>•</span>
                  <span>Garantia 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              O PROBLEMA (POR QUE VOCÊ ESTÁ PERDENDO VENDAS)
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="mj-problem-item">
                <XCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">"Tá caro."</p>
                  <p className="text-muted-foreground">Você trava e a conversa esfria.</p>
                </div>
              </div>
              <div className="mj-problem-item">
                <XCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">"Vou pensar."</p>
                  <p className="text-muted-foreground">Some e não volta.</p>
                </div>
              </div>
              <div className="mj-problem-item">
                <XCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">"Preciso falar com meu sócio."</p>
                  <p className="text-muted-foreground">Adeus, timing.</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-2xl font-bold text-primary mt-12">
              Cada uma dessas frases é uma barreira. E toda barreira tem a resposta exata que destrava a venda.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solucao" className="py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              A SOLUÇÃO (O QUE VOCÊ RECEBE)
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl text-foreground">
                <strong className="text-primary">Anti-Objeção</strong> entrega respostas prontas e adaptáveis para as objeções mais comuns — já organizadas por perfil de cliente e tipo de situação.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">+50 objeções mapeadas (financeiras, tempo, confiança, técnica, comparação e mais)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">3 estilos de resposta: racional/analítica, emocional e prática/objetiva</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Aplicável a qualquer nicho (produtos, serviços, físico ou digital)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Uso imediato no WhatsApp, Instagram DM, e-mail ou telefone</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="mj-cta-yellow text-xl md:text-2xl px-12 py-6 w-full md:w-auto">
                QUERO FECHAR MAIS VENDAS
              </Button>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              COMO FUNCIONA (3 PASSOS RÁPIDOS)
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="text-center">
                <div className="mj-benefit-number mb-4">1</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Cole a mensagem de objeção que o cliente lhe mandou.
                </h3>
              </div>
              <div className="text-center">
                <div className="mj-benefit-number mb-4">2</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Selecione o estilo que combina com a pessoa e com você (racional, emocional ou prático).
                </h3>
              </div>
              <div className="text-center">
                <div className="mj-benefit-number mb-4">3</div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Copie e envie a resposta — com um direcionamento suave para o "sim".
                </h3>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 max-w-4xl mx-auto">
                <p className="text-2xl font-bold text-primary">
                  Resultado: você mantém a conversa viva, reposiciona valor e conduz pro fechamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why it works Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              POR QUE FUNCIONA
            </h2>
            
            <div className="mj-feature-grid">
              <div className="mj-feature-card">
                <MessageSquare className="text-primary icon-large mb-4" />
                <h3 className="font-bold text-foreground mb-2">Baseado em conversas reais de venda</h3>
                <p className="text-muted-foreground text-sm">Nada de teoria solta.</p>
              </div>
              
              <div className="mj-feature-card">
                <Clock className="text-primary icon-large mb-4" />
                <h3 className="font-bold text-foreground mb-2">Resposta certa, na hora certa</h3>
                <p className="text-muted-foreground text-sm">Não dá tempo do cliente esfriar.</p>
              </div>
              
              <div className="mj-feature-card">
                <Users className="text-primary icon-large mb-4" />
                <h3 className="font-bold text-foreground mb-2">No seu tom de voz</h3>
                <p className="text-muted-foreground text-sm">Natural, humano, sem parecer script engessado.</p>
              </div>
              
              <div className="mj-feature-card">
                <Target className="text-primary icon-large mb-4" />
                <h3 className="font-bold text-foreground mb-2">Foco em fechamento</h3>
                <p className="text-muted-foreground text-sm">Toda resposta termina com um convite simples para avançar.</p>
              </div>

              <div className="mj-feature-card">
                <Sparkles className="text-primary icon-large mb-4" />
                <h3 className="font-bold text-foreground mb-2">Testado e aprovado</h3>
                <p className="text-muted-foreground text-sm">Milhares de vendedores já transformaram suas conversas.</p>
              </div>

              <div className="mj-feature-card">
                <Lightbulb className="text-primary icon-large mb-4" />
                <h3 className="font-bold text-foreground mb-2">Inteligência emocional</h3>
                <p className="text-muted-foreground text-sm">Respostas que conectam e convertem simultaneamente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's inside Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              O QUE VEM DENTRO (VISÃO GERAL)
            </h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="mj-problem-item">
                <BookOpen className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">Biblioteca com 50+ objeções</p>
                  <p className="text-muted-foreground">Divididas por categoria (preço, tempo, confiança, perfil, procrastinação, técnica, comparação).</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <Copy className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">3 variações por objeção</p>
                  <p className="text-muted-foreground">Racional, emocional, prática.</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <FileText className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">Mini-guias rápidos</p>
                  <p className="text-muted-foreground">Quando usar cada estilo, como puxar o sim, regras de ouro no WhatsApp (parágrafos curtos, pergunta de avanço, pausa estratégica).</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <CheckSquare className="text-primary text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground text-lg font-bold">Checklists</p>
                  <p className="text-muted-foreground">Sinais de compra e próximo passo sugerido após cada resposta.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For whom Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              PARA QUEM É
            </h2>
            
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="bg-card/50 rounded-lg p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Users className="text-primary" />
                    Perfis que se beneficiam:
                  </h3>
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span>Autônomos e empreendedores</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span>Lojas físicas e digitais</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span>Criadores de infoprodutos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span>Consultorias e clínicas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span>Profissionais liberais</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-card/50 rounded-lg p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <Target className="text-primary" />
                    Quem já vende, mas quer:
                  </h3>
                  <div className="space-y-4">
                    <p className="text-foreground text-lg">
                      <strong>Aumentar a taxa de conversão</strong> sem depender de improviso.
                    </p>
                    <p className="text-foreground text-lg">
                      <strong>Ter confiança</strong> para responder qualquer objeção.
                    </p>
                    <p className="text-foreground text-lg">
                      <strong>Fechar mais vendas</strong> com menos esforço.
                    </p>
                    <p className="text-foreground text-lg">
                      <strong>Recuperar clientes</strong> que estavam perdidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="prova" className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              DEPOIMENTOS
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="mj-testimonial">
                <div className="flex items-center gap-4 mb-4">
                  <img src={camilaPhoto} alt="Camila" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-foreground">Camila, designer</p>
                    <CheckCircle2 className="text-green-500 h-5 w-5" />
                  </div>
                </div>
                <p className="text-foreground italic">
                  "Fechei 3 vendas no mesmo dia só usando as respostas prontas."
                </p>
              </div>
              
              <div className="mj-testimonial">
                <div className="flex items-center gap-4 mb-4">
                  <img src={joaoPhoto} alt="João" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-foreground">João, corretor</p>
                    <CheckCircle2 className="text-green-500 h-5 w-5" />
                  </div>
                </div>
                <p className="text-foreground italic">
                  "Recuperei clientes que eu já tinha dado por perdidos."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="garantia" className="py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <div className="bg-card/30 rounded-2xl p-12 border-2 border-primary/30 max-w-4xl mx-auto">
              <img src={guaranteeBadge} alt="Selo de garantia" className="h-32 w-32 mx-auto mb-8 guarantee-badge" />
              <h2 className="section-title text-4xl mb-6 text-primary">
                GARANTIA RISCO ZERO
              </h2>
              <div className="space-y-6">
                <p className="text-2xl font-bold text-foreground">
                  Use por 7 dias. Se não sentir diferença nas conversas e no fechamento, devolvemos 100% do seu dinheiro.
                </p>
                <p className="text-lg text-muted-foreground">
                  Simples assim. Sem perguntas, sem complicações.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="text-primary" />
                    <span>Compra 100% segura</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="mj-cta-yellow text-xl md:text-2xl px-12 py-6 w-full md:w-auto">
                QUERO MINHAS RESPOSTAS AGORA
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-12">
              FAQ (CURTO E DIRETO)
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="mj-problem-item">
                <div className="w-full">
                  <p className="text-foreground text-lg font-bold mb-2">Funciona no meu nicho?</p>
                  <p className="text-muted-foreground">Sim. As respostas são neutras e fáceis de adaptar.</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <div className="w-full">
                  <p className="text-foreground text-lg font-bold mb-2">E se o cliente trouxer duas objeções?</p>
                  <p className="text-muted-foreground">Escolha a principal, responda, espere o retorno e use o próximo passo sugerido.</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <div className="w-full">
                  <p className="text-foreground text-lg font-bold mb-2">Não tenho tempo.</p>
                  <p className="text-muted-foreground">Você só copia e envia — respostas pensadas para mensagens rápidas.</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <div className="w-full">
                  <p className="text-foreground text-lg font-bold mb-2">Tenho medo de parecer forçado.</p>
                  <p className="text-muted-foreground">Cada objeção tem 3 estilos. Use o que parece natural pra você.</p>
                </div>
              </div>
              
              <div className="mj-problem-item">
                <div className="w-full">
                  <p className="text-foreground text-lg font-bold mb-2">E se eu não gostar?</p>
                  <p className="text-muted-foreground">Garantia total de 7 dias.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section id="oferta" className="py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="section-title text-3xl md:text-4xl text-primary mb-8">
              OFERTA DE LANÇAMENTO
            </h2>
            <p className="text-xl mb-8 text-foreground">
              Condição promocional válida para as primeiras ativações. Após isso, o valor será reajustado.
            </p>
            <div className="my-8 flex justify-center">
              <Countdown target={target} />
            </div>
            <Button className="mj-cta-yellow text-xl md:text-2xl px-12 py-6 w-full md:w-auto">
              QUERO MINHAS RESPOSTAS AGORA
            </Button>
          </div>
        </section>

        {/* Fixed CTA Footer */}
        <section className="py-8 bg-background border-t border-border">
          <div className="container mx-auto text-center">
            <Button className="mj-cta-yellow text-xl md:text-2xl px-12 py-6 w-full md:w-auto">
              QUERO MINHAS RESPOSTAS AGORA
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background text-foreground py-12 border-t border-border">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 text-sm">
            <div className="space-y-4">
              <p className="font-display font-bold text-lg">Anti-Objeção</p>
              <p>© {new Date().getFullYear()} Anti-Objeção. Todos os direitos reservados.</p>
            </div>
            <nav className="justify-self-start md:justify-self-end">
              <ul className="flex items-center gap-6">
                <li><a href="#" className="underline-offset-4 hover:underline">Política de Privacidade</a></li>
                <li><a href="#" className="underline-offset-4 hover:underline">Termos de Uso</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
