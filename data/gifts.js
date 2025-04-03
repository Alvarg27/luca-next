export const gifts = [
    {
      title: 'Kit ejecutivo',
      file: '/Gifts/ejecutivo.webp', //missing
      permalink: 'ejecutivo',
      characteristics: [
        'Libreta con elástico',
        'Termo con doble pared de acero inoxidable', 
        'Boligrafo color negro metálico'
      ],
    },
    {
      title: 'Kit de gin',
      file: 'https://cdn.tectify.io/luca-web/gifts/kitginebra.webp',
      permalink: 'gin',
      characteristics: [
        'Caja de madera con botella de gin',
        '3 snacks de su preferencia',
        'Contiene jigger y shaker'
      ],
      options: {
        bottle: ['Hendrick\'s 750 ML', 'Bombay 750 ML']
      }
    },
    {
      title: 'Kit de vino',
      file: '/Gifts/Vino.webp',
      permalink: 'vino',
      characteristics: [
        'Caja de madera con botella de vino',
        '3 snacks de su preferencia'
      ],
      options: {
        bottle: ['Maria Tinto 750 ML', '3V 750 ML', 'Finca Las Moras 750 ML']
      }
    },
    {
      title: 'Kit de tequila',
      file: '/Gifts/Tequila3.webp',
      permalink: 'tequila',
      characteristics: [
        'Caja de madera con botella de tequila',
        '3 snacks de su preferencia',
        '4 shots tequileros'
      ],
      options: {
        bottle: ['Tequila 1800 700 ML', 'Maestro Dobel 700 ML', 'Centenario Plata 700 ML']
      }
    },
    {
        title: 'Kit Canasta Plus',
        file: '',
        permalink: 'canasta',
        characteristics: [
            'Canasta de mimbre con 5 diferentes botellas',
            'Aceitunas',
            'Chocolates y jamón serrano'
        ]
    },
    {
        title: 'Kit Vino Plus',
        file: '/Gifts/vinopl.jpeg',
        permalink: 'vinoplus',
        characteristics: [
            'Caja de madera con botella de vino',
            'Caja de madera',
            'Una copa de vino'
        ],
        options: {
          bottle: ['Maria Tinto 750 ML', '3V 750 ML', 'Finca Las Moras 750 ML']
        }
    },
    {
        title: 'Kit Gin Plus',
        file: 'https://cdn.tectify.io/luca-web/gifts/kitginebra.webp',
        permalink: 'ginplus',
        characteristics: [
            'Caja de madera con botella de gin',
            '3 snacks',
            'Jigger',
            'Shaker',
            'Vasitos de cristal',
            'Frutos deshidratados'
        ]
    },
    {
        title: 'Kit Whisky',
        file: '/Gifts/IMG_5968 (2).jpg',
        permalink: 'whisky',
        characteristics: [
            'Caja de madera con botella de whisky',
            '3 snacks de su preferencia',
            '3 vasitos de cristal'
        ],
        options: {
          bottle: ['Black Label 750 ML', 'Chivas Regal 12 750 ML']
        }
    },
    {
        title: 'Kit Licor',
        file: '/Gifts/Licor.webp',
        permalink: 'licor',
        characteristics: [
            'Caja de madera con botella de Licor 43',
            '3 snacks de su preferencia',
            'Shaker',
            '2 vasitos de cristal',
            'Cold Brew'
        ]
    },
    {
        title: 'Kit Mixología Mezcal',
        file: '/Gifts/mezcal.webp',
        permalink: 'mixmezcal',
        characteristics: [
            'Mezcal',
            '2 tazas moscow mule',
            'Jigger',
            'Frutos secos e infusiones'
        ],
        options: {
          bottle: ['Mezcal Amaras 750 ML', '400 Conejos 750 ML', 'Mezcal Sin Pena']
        }
    },
    {
        title: 'Kit Mixología Gin',
        file: 'https://cdn.tectify.io/luca-web/gifts/kitginebra.webp',
        permalink: 'mixgin',
        characteristics: [
            'Gin',
            'Shaker',
            'Jigger',
            'Frutos secos',
            'Vaso de cristal'
        ],
        options: {
          bottle: ['Hendrick\'s 750 ML', 'Bombay 750 ML'],
          snack: ['Piña enchilada', 'cacahuates japoneses', 'cacahuates enchilados', 'cacahuates garapiñados']
        }
    },
    {
        title: 'Kit de Café',
        file: '',
        permalink: 'cafe',
        characteristics: [
            'Café molido',
            'Prensa frances',
            'Chocolates',
            'Vela aromática',
            'Termo o taza promocional',
            'Caja negra de cartón rigido personalizada',
            'Frutos secos'
        ]
    }
  ];
  
  export default gifts;