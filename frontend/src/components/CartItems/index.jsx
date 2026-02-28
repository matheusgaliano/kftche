import { Table } from '../index'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice';
import { ButtonGroup, EmptyCart, ProductImage, ProductTotalPrice, TrashImage } from './styles';
import TrashIcon from '../../assets/trash.svg';

export function CartItems() {
    const { cartProducts, decreaseProductQuantity, increaseProductQuantity, deleteProductFromCart } = useCart()
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
                {cartProducts?.length ? (
                    cartProducts.map(prd => (
                        <Table.Tr key={prd.id}>
                            <Table.Td>
                                <ProductImage src={prd.url} />
                            </Table.Td>
                            <Table.Td>{prd.name}</Table.Td>
                            <Table.Td>{prd.currencyValue}</Table.Td>
                            <Table.Td>
                                <ButtonGroup>
                                    <button onClick={() => decreaseProductQuantity(prd.id)}>-</button>
                                    {prd.quantity}
                                    <button onClick={() => increaseProductQuantity(prd.id)}>+</button>

                                </ButtonGroup>
                            </Table.Td>
                            <Table.Td>
                                <ProductTotalPrice>
                                    {formatPrice(prd.quantity * prd.price)}
                                </ProductTotalPrice>
                            </Table.Td>
                            <Table.Td>
                                <TrashImage
                                    src={TrashIcon}
                                    alt='Lixeira'
                                    onClick={() => deleteProductFromCart(prd.id)} />
                            </Table.Td>
                        </Table.Tr>
                    ))
                ) : (
                    <Table.Tr>
                        <Table.Td colSpan={6}>
                            <EmptyCart>Carrinho Vazio</EmptyCart>
                        </Table.Td>
                    </Table.Tr>
                )}
            </Table.Body>
        </Table.Root>
    )
}