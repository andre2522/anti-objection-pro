import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { LucideIcon, ArrowUpRight, CheckCircle2, Lock, TrendingUp, XCircle } from "lucide-react";
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
        <title>Anti-Objeção - Respostas prontas que fecham vendas</title>
        <meta
          name="description"
          content="Pare de perder vendas. Anti-Objeção te dá respostas prontas, no seu tom, para vencer objeções e fechar mais negócios."
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Anti-Objeção - Respostas que fecham vendas" />
        <meta property="og:description" content="Respostas prontas para qualquer objeção. Feche mais negócios todos os dias." />
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

      <header className="w-full border-b">
        <nav className="container mx-auto flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent" aria-hidden />
            <span className="font-display text-lg tracking-wide">
              <span className="text-accent">Anti</span>
              -Objeção
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <a href="#beneficios" className="story-link text-sm">Benefícios</a>
            <a href="#prova" className="story-link text-sm">Prova Social</a>
            <a href="#garantia" className="story-link text-sm">Garantia</a>
            <a href="#oferta" className="story-link text-sm">Oferta</a>
          </div>
          <div className="hidden md:block">
            <a href="#cta">
              <Button variant="cta" size="lg" className="font-display">
                QUERO MINHAS RESPOSTAS AGORA
                <ArrowUpRight className="ml-1" />
              </Button>
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-display font-extrabold uppercase text-4xl leading-tight md:text-5xl">
              <span className="text-accent">🛑 Pare de perder vendas</span> por não saber o que responder!
            </h1>
            <p className="text-lg text-foreground/80">
              O Anti-Objeção coloca na sua mão a resposta perfeita para qualquer desculpa que o cliente inventar.
            </p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><span>📲 Em segundos, você sabe exatamente o que dizer.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><span>💬 Fala no seu tom, sem parecer forçado.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><span>💵 E fecha mais negócios — todos os dias.</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4" id="cta">
              <a href="#oferta" className="hover-scale">
                <Button variant="cta" size="lg" className="font-display">
                  QUERO MINHAS RESPOSTAS AGORA
                  <ArrowUpRight className="ml-1" />
                </Button>
              </a>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Lock className="text-primary" /> Compra 100% segura
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroGraphic}
              alt="Ilustração com cadeado e seta ascendente representando segurança e crescimento em vendas"
              className="mx-auto w-full max-w-[640px] drop-shadow-xl"
              loading="eager"
            />
          </div>
        </section>

        {/* Dor do Cliente */}
        <section className="container mx-auto grid gap-8 py-14">
          <h2 className="font-display text-3xl text-accent text-center md:text-left">O Problema</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-muted shadow-sm">
              <CardContent className="pt-6 space-y-3 text-center md:text-left">
                <div className="flex justify-center md:justify-start"><XCircle className="text-accent" /></div>
                <p className="font-semibold">Cliente: "Tá caro"</p>
                <p className="text-foreground/80">Você trava. E a venda esfria.</p>
              </CardContent>
            </Card>
            <Card className="border border-muted shadow-sm">
              <CardContent className="pt-6 space-y-3 text-center md:text-left">
                <div className="flex justify-center md:justify-start"><XCircle className="text-accent" /></div>
                <p className="font-semibold">Cliente: "Vou pensar"</p>
                <p className="text-foreground/80">Some. E você perde o timing.</p>
              </CardContent>
            </Card>
            <Card className="border border-muted shadow-sm">
              <CardContent className="pt-6 space-y-3 text-center md:text-left">
                <div className="flex justify-center md:justify-start"><XCircle className="text-accent" /></div>
                <p className="font-semibold">Cliente: "Preciso falar com meu sócio"</p>
                <p className="text-foreground/80">Nunca mais responde. Adeus, oportunidade.</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 text-center md:text-left">
            Cada “não” desses poderia ter sido um “sim”. Você só precisa saber como responder.
          </p>
        </section>

        {/* Solução */}
        <section className="bg-secondary">
          <div className="container mx-auto py-14">
            <h2 className="font-display text-3xl text-center mb-8">A Solução</h2>
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <img
                  src={mockupPhone}
                  alt="Mockup no celular mostrando respostas prontas para objeções"
                  className="mx-auto w-full max-w-[560px] rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <p className="text-foreground/80 text-center md:text-left">O Anti-Objeção te entrega:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><p className="font-semibold">Mais de 50 objeções mapeadas</p></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><p className="font-semibold">3 estilos de resposta (racional, emocional e prática)</p></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><p className="font-semibold">Frases prontas para qualquer nicho</p></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-0.5" /><p className="font-semibold">Resposta em segundos, direto no celular</p></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card className="border-accent">
                    <CardContent className="pt-6">
                      <p className="font-display text-xl text-accent">+50</p>
                      <p className="text-sm text-foreground/70">objeções mapeadas</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent">
                    <CardContent className="pt-6">
                      <p className="font-display text-xl text-accent">3</p>
                      <p className="text-sm text-foreground/70">estilos de resposta</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent">
                    <CardContent className="pt-6">
                      <p className="font-display text-xl text-accent">Any</p>
                      <p className="text-sm text-foreground/70">qualquer nicho</p>
                    </CardContent>
                  </Card>
                </div>
                <a href="#oferta" className="hover-scale inline-block">
                  <Button variant="cta" size="lg" className="font-display">
                    QUERO FECHAR MAIS VENDAS
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="container mx-auto py-14">
          <h2 className="font-display text-3xl mb-8 text-center md:text-left">Por que funciona?</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: TrendingUp, text: "Baseado em conversas reais de vendas" },
              { icon: CheckCircle2, text: "Resposta rápida antes do cliente esfriar" },
              { icon: TrendingUp, text: "Testado em diferentes mercados" },
              { icon: CheckCircle2, text: "Adapta ao seu tom de voz" },
            ].map((b, i) => (
              <Card key={i} className="border-accent">
                <CardContent className="flex items-start gap-3 pt-6">
                  <b.icon className="text-primary" />
                  <p className="text-foreground/80 font-semibold">{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Prova Social */}
        <section id="prova" className="bg-secondary">
          <div className="container mx-auto py-14">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <TrendingUp className="text-primary" />
              <h2 className="font-display text-3xl">Testado e aprovado</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary">
                <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
                  <img src={camilaPhoto} alt="Foto de Camila, designer" className="h-16 w-16 rounded-full object-cover" />
                  <p className="text-sm text-foreground/60">– Camila, designer</p>
                  <p className="text-foreground/90">"Fechei 3 vendas no mesmo dia só usando as respostas prontas."</p>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
                  <img src={joaoPhoto} alt="Foto de João, corretor" className="h-16 w-16 rounded-full object-cover" />
                  <p className="text-sm text-foreground/60">– João, corretor</p>
                  <p className="text-foreground/90">"Recuperei clientes que eu já tinha perdido."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section id="garantia" className="bg-primary text-primary-foreground">
          <div className="container mx-auto py-14 text-center">
            <img src={guaranteeBadge} alt="Selo dourado Garantia 7 dias" className="h-40 w-40 mx-auto mb-6" />
            <h2 className="font-display text-3xl">Garantia</h2>
            <p className="text-lg mt-2">7 dias para testar sem risco. Não fechou mais vendas? Devolvemos seu dinheiro.</p>
            <a href="#oferta" className="inline-block mt-6">
              <Button variant="cta" size="lg" className="font-display">
                QUERO MINHAS RESPOSTAS AGORA
              </Button>
            </a>
          </div>
        </section>

        {/* Urgência */}
        <section id="oferta" className="bg-accent">
          <div className="container mx-auto py-12 text-center">
            <h2 className="font-display text-3xl">⚠️ Lançamento com valor promocional</h2>
            <p className="text-foreground/90 mt-1">Válido para as primeiras 50 ativações. Depois disso, o preço sobe.</p>
            <div className="my-6 flex justify-center">
              <Countdown target={target} />
            </div>
            <a href="#cta" className="hover-scale inline-block">
              <Button variant="cta" size="lg" className="font-display">
                QUERO MINHAS RESPOSTAS AGORA
                <ArrowUpRight className="ml-1" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="container mx-auto py-10 grid gap-6 md:grid-cols-2 text-sm">
          <div className="space-y-2">
            <p className="font-semibold">Anti-Objeção</p>
            <p>© {new Date().getFullYear()} Anti-Objeção. Todos os direitos reservados.</p>
          </div>
          <nav className="justify-self-start md:justify-self-end">
            <ul className="flex items-center gap-4">
              <li><a href="#" className="underline-offset-4 hover:underline">Política de Privacidade</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline">Direitos Reservados</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Index;
