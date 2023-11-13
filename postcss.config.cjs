module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // Базовый размер шрифта в пикселях
      unitPrecision: 5, // Точность округления до 5 знаков после запятой
      propList: [
        "*",
        "!border-left",
        "!border-right",
        "!border-top",
        "!border-bottom",
        "!border",
        "!outline",
      ], // Конвертировать все свойства, содержащие значения в vw
      selectorBlackList: [], // Исключить селекторы из конвертации
      replace: true, // Заменять исходные значения свойств
      mediaQuery: false, // Разрешить конвертацию внутри медиа-запросов
      minPixelValue: 0, // Минимальное значение в пикселях, при котором будет производиться конвертация
    },
  },
};
