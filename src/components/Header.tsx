import './Header.css'
import { Wishlist } from '../icons/Wishlist'
import { Search } from '../icons/Search'

export const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <div className="header__items">
          <a href="">new arrivals</a>
          <a href="">shop</a>
          <a href="">collections</a>
        </div>
        <h2 className="header__header">modnikky</h2>
        <div className="header__items">
          <a href="">
            <Search />
            search
          </a>
          <a href="">sing in</a>
          <a href="">bag</a>
          <a href="">
            <Wishlist />
          </a>
        </div>
      </div>
      <div className="collection">
        <h2 className="collection__header">new collection</h2>
        <p>
          Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and
          supremely cool.
        </p>
        <button className="shop">shop new arrivals</button>
      </div>
    </div>
  )
}
