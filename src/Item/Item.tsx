import Button from '@material-ui/core/Button'

// types 
import { CartItemType } from '../App'
// styles
import { Wrapper } from './Item.style'

type Props = {
    item: CartItemType;
    handleAddToCart: (clikedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price.toFixed(2)}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
)


export default Item;