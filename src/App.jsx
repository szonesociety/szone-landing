const TELEGRAM_URL = 'https://t.me/szonecsocietyy_bot'
const LOGO_SRC = '/favicon.svg'

const buyers = [
  'Lucas M. acabou de entrar',
  'Felipe R. entrou no grupo exclusivo',
  'Joao P. entrou agora',
  'Bruno T. confirmou o acesso',
  'Thiago N. entrou no Telegram',
  'Matheus A. acabou de comprar',
  'Carlos R. liberou o acesso',
  'Vinicius T. entrou agora',
  'Gabriel S. garantiu a oferta',
  'Rafael P. confirmou entrada'
]

function getBuyerMessage(index) {
  if (!Array.isArray(buyers) || buyers.length === 0) {
    return 'Novo membro entrou agora'
  }

  const safeIndex = Math.abs(Number(index) || 0) % buyers.length
  return buyers[safeIndex]
}

function Logo({ className = '' }) {
  return (
    <img
      src={LOGO_SRC}
      alt="SZ Logo"
      className={`object-contain ${className}`}
      style={{ filter: 'drop-shadow(0 0 18px rgba(239, 68, 68, 0.75))' }}
      onError={(event) => {
        event.currentTarget.style.display = 'none'
        const fallback = event.currentTarget.nextElementSibling
        if (fallback) fallback.classList.remove('hidden')
      }}
    />
  )
}

function LogoFallback({ className = '' }) {
  return (
    <div className={`hidden items-center justify-center rounded-2xl bg-red-600 font-black text-white shadow-lg ${className}`}>
    <img src="public\image.png" alt="Minha Foto" class="urso"></img>
    </div>
  )
}

function PurchasePopup() {
  const message = getBuyerMessage(3)

  return (
    <div className="fixed bottom-5 left-5 z-50 hidden sm:block">
      <div className="rounded-2xl border border-red-500 bg-zinc-950 px-4 py-3 shadow-2xl">
        <p className="text-sm font-medium text-zinc-200">
          <span className="text-red-400">{message}</span>
        </p>
      </div>
    </div>
  )
}

function BenefitCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-red-500 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500 bg-red-950 text-xl text-red-400">
        +
      </div>
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-400">{description}</p>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-2xl font-black text-red-500">{value}</p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  )
}

export default function SZLandingPage() {
  const benefits = [
    {
      title: 'Acesso imediato',
      description: 'A entrada é liberada logo após a confirmação. Sem espera e sem complicação.'
    },
    {
      title: 'Conteúdos organizados',
      description: 'Tudo separado de forma simples para você encontrar o que procura com rapidez.'
    },
    {
      title: 'Privacidade e segurança',
      description: 'Ambiente privado, acesso protegido e experiência discreta para membros VIP.'
    }
  ]

  return (
    <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(circle at top, rgba(185, 28, 28, 0.28), transparent 35%), linear-gradient(to bottom, #000000, #050505)'
        }}
      />
      <PurchasePopup />

      <header className="relative z-10 border-b border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center">
              <Logo className="h-16 w-16 scale-125" />
              <LogoFallback className="h-12 w-12 text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-wide">SECRET ZONE</h1>
              <p className="text-xs uppercase tracking-widest text-red-400">Acesso privado</p>
            </div>
          </div>

          <a
            href={TELEGRAM_URL}
            className="rounded-xl bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-wide shadow-lg transition hover:bg-red-500"
          >
            Entrar agora
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="mt-7 text-5xl font-black leading-tight md:text-6xl">
            Acesso privado em uma área premium.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            A plataforma entrega uma experiência privada, organizada e direta para quem quer acesso rápido, conteúdos selecionados e novidades frequentes em um único lugar.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Stat value="+1200" label="membros ativos" />
            <Stat value="24H" label="atualizações frequentes" />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={TELEGRAM_URL}
              className="rounded-2xl bg-red-600 px-8 py-5 text-center text-lg font-black uppercase shadow-2xl transition hover:bg-red-500"
            >
              Acessar Telegram
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-900 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex h-96 items-center justify-center bg-gradient-to-b from-zinc-900 via-black to-black px-8 text-center md:h-screen md:max-h-[580px]">
              <div>
                <div className="relative mx-auto flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl">
                  <Logo className="h-[420px] w-[420px] object-contain" />
                  <LogoFallback className="h-40 w-40 text-5xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <BenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <footer className="relative z-10 mt-20 border-t border-zinc-800 px-5 py-8 text-center text-sm text-zinc-500">
        2026 SECRET ZONE - Plataforma privada exclusiva
      </footer>
    </main>
  )
}

if (typeof console !== 'undefined') {
  console.assert(getBuyerMessage(0) === buyers[0], 'getBuyerMessage should return first buyer for index 0')
  console.assert(getBuyerMessage(buyers.length) === buyers[0], 'getBuyerMessage should wrap indexes safely')
  console.assert(typeof getBuyerMessage(3) === 'string', 'getBuyerMessage should return a string')
  console.assert(getBuyerMessage(-1) === buyers[1], 'getBuyerMessage should handle negative indexes safely')
  console.assert(getBuyerMessage('abc') === buyers[0], 'getBuyerMessage should handle invalid indexes safely')
}
