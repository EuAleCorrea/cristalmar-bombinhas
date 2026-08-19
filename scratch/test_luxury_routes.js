const http = require('http');

const routes = [
  '/',
  '/locacao',
  '/locacao?praia=Bombas',
  '/locacao?praia=Canto%20Grande',
  '/locacao?tipo=Cobertura',
  '/locacao/024',
  '/locacao/164',
  '/locacao/L042',
  '/locacao/216',
  '/vendas',
  '/sobre',
  '/cadastre',
  '/contato'
];

async function checkRoute(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      resolve({ url: urlPath, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url: urlPath, error: err.message });
    });
  });
}

async function run() {
  console.log("=== INICIANDO TESTE DE ROTAS COM NOVA IDENTIDADE VISUAL ===");
  // Wait a bit for next dev server to be ready
  await new Promise(r => setTimeout(r, 4000));
  
  let allPass = true;
  for (const r of routes) {
    const result = await checkRoute(r);
    console.log(`Rota: ${result.url.padEnd(35)} -> Status: ${result.status || result.error}`);
    if (result.status !== 200 && result.status !== 307 && result.status !== 308) {
      allPass = false;
    }
  }
  
  if (allPass) {
    console.log("\n✅ TODAS AS ROTAS CARREGARAM COM SUCESSO!");
  } else {
    console.log("\n❌ HOUVE FALHA EM UMA OU MAIS ROTAS.");
  }
}

run();
