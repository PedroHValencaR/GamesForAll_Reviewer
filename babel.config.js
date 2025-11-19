// [ARQUIVO: babel.config.js] (Atualizado)
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  
  // --- CÓDIGO ADICIONADO PARA O REANIMATED ---
  plugins: [
    'react-native-reanimated/plugin',
  ],
  // --- FIM DO CÓDIGO ADICIONADO ---
};