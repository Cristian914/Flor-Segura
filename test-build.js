// Script para testar a build e variáveis de ambiente
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔧 Testando configuração de build...\n');

// 1. Verificar variáveis de ambiente
console.log('📋 Variáveis de ambiente:');
const envFile = '.env';
if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  console.log(envContent);
} else {
  console.log('❌ Arquivo .env não encontrado');
}

// 2. Verificar package.json
console.log('\n📦 Scripts disponíveis:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log(JSON.stringify(packageJson.scripts, null, 2));

// 3. Testar build
console.log('\n🏗️ Executando build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build executada com sucesso!');
  
  // Verificar se o dist foi criado
  if (fs.existsSync('dist')) {
    console.log('📁 Pasta dist criada com sucesso');
    const distFiles = fs.readdirSync('dist');
    console.log('📄 Arquivos na pasta dist:', distFiles);
  }
} catch (error) {
  console.error('❌ Erro na build:', error.message);
}

console.log('\n🚀 Para testar localmente:');
console.log('npm run preview');
console.log('\n📤 Para deploy na Vercel:');
console.log('vercel --prod');