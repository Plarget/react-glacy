export const chooseCard = (chosen) => {
  switch (chosen) {
    case 'marshmallow':
      return marshmallow
    case 'raspberry' :
      return raspberry
    default :
        return ''
  }
}

const raspberry = {
  label : 'Малинка даром!',
  text: 'При покупке 2 кг любого фруктового мороженого добавим в ваш заказ банку малинового варенья бесплатно.',
  image: 'images/content/raspberry.png',
}

const marshmallow = {
  label : 'Маршмеллоу даром!',
  text: 'При покупке 2 кг пломбира добавим в ваш заказ упаковку нежных зефирок совершенно бесплатно.',
  image: 'images/content/marshmallow.png',
}