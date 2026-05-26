# lp-workshop-fazenda

Landing page de venda — **"A Fazenda Que Funciona Como Empresa"**  
Capital Agro Investors · Workshop Dr. Renato Rodrigues

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Lucide React
- next/font (Cormorant Garamond + Inter)
- next/image

## Rodar localmente

```bash
# 1. Instalar dependências
pnpm install     # ou npm install

# 2. Copiar variáveis de ambiente
cp .env.local.example .env.local
# Preencher .env.local com os IDs reais (ver seção abaixo)

# 3. Iniciar servidor de desenvolvimento
pnpm dev         # ou npm run dev
```

Abre em http://localhost:3000

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_GA4_ID` | ID do Google Analytics 4 (ex: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel do Facebook |

## Assets placeholder a substituir

Todos os arquivos abaixo devem ser adicionados à pasta `public/` antes do deploy:

| Arquivo | Descrição |
|---|---|
| `public/renato.jpg` | Foto profissional do Dr. Renato em alta resolução (recomendado 600×800px+) |
| `public/apostila-capa.jpg` | Print da capa da apostila |
| `public/apostila-sumario.jpg` | Print do sumário da apostila |
| `public/apostila-interna.jpg` | Print de página interna (Sistema Financeiro) |
| `public/depoimento-1.jpg` | Print de WhatsApp do Ronilson (opcional) |
| `public/depoimento-2.jpg` | Print de WhatsApp do Vinícius (opcional) |
| `public/depoimento-3.jpg` | Print de WhatsApp do produtor de Muniz Freire (opcional) |
| `public/og.jpg` | Imagem de preview social (1200×630px) |

> Se os prints de depoimento não forem fornecidos, os cards exibem o texto formatado automaticamente.
> Para ativar a imagem real: os componentes já têm o slot `slotImage` configurado — basta ter o arquivo em `public/`.

## Links Cakto a substituir

Em `lib/constants.ts`, substitua os placeholders pelos códigos reais:

```ts
checkoutUrl: 'https://pay.cakto.com.br/SUBSTITUIR_47'  // → código real do plano R$ 47
checkoutUrl: 'https://pay.cakto.com.br/SUBSTITUIR_67'  // → código real do plano R$ 67
```

## Eventos de analytics implementados

| Evento | Onde dispara |
|---|---|
| `page_view` | Automático pelo GA4 |
| `scroll_to_planos` | Clique no CTA do hero ("Ver os planos do workshop") |
| `click_checkout_47` | Clique no botão do plano R$ 47 |
| `click_checkout_67` | Clique no botão do plano R$ 67 (inclusive CTA final) |
| `faq_open` | Abertura de pergunta do FAQ (passa `{ question }`) |
| `view_pricing` | Quando a seção `#planos` entra no viewport pela 1ª vez |

UTMs são persistidas em `localStorage` e anexadas automaticamente aos links do Cakto.

## Deploy (Vercel)

```bash
# Build de produção
pnpm build

# Deploy via Vercel CLI
vercel --prod
```

Ou conectar o repositório no dashboard da Vercel e configurar as variáveis de ambiente lá.

## Checklist pré-deploy

- [ ] Substituir `SUBSTITUIR_47` e `SUBSTITUIR_67` em `lib/constants.ts`
- [ ] Adicionar todos os assets em `public/`
- [ ] Configurar `NEXT_PUBLIC_GA4_ID` e `NEXT_PUBLIC_META_PIXEL_ID` no ambiente
- [ ] Criar `public/og.jpg` (1200×630px)
- [ ] Rodar Lighthouse mobile e confirmar: Performance ≥ 90, Accessibility ≥ 95, SEO = 100
