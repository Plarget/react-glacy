import MainPreview from '@widgets/MainPreview/MainPreview'
import { MainGift } from '@widgets/MainGift/MainGift'
import { MainPopular } from '@widgets/MainPopular/MainPopular'
import { MainInfo } from '@widgets/MainInfo/MainInfo'
import { MainNews } from '@widgets/MainNews/MainNews'
import { MainDelivery } from '@widgets/MainDelivery/MainDelivery'
import { MainAddress } from '@widgets/MainAddress/MainAddress'


const MainPage = () => {
  return (
      <>
        <MainPreview/>
        <MainGift/>
        <MainPopular/>
        <MainInfo/>
        <MainNews/>
        <MainDelivery/>
        <MainAddress/>
      </>
  )
}

export default MainPage