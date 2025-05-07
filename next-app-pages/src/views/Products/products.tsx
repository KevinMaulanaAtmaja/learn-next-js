import styles from "./Products.module.scss";

type ProductType = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
};

export default function ProductView({ prods }: { prods: ProductType[] }) {
    return (
        <div className={styles.product}>
            <h1 className={styles.product__title}>Products Page</h1>
            <div className={styles.product__content}>
                {prods?.length > 0 ? (
                    <>
                        {prods?.map((prod: ProductType) => (
                            <div key={prod.id} className={styles.product__content__item}>
                                <div className={styles.product__content__item__image}>
                                    <img src={prod.image} alt={prod.name} />
                                </div>
                                <h4 className={styles.product__content__item__name}>{prod.name}</h4>
                                <p className={styles.product__content__item__category}>{prod.category}</p>
                                <div className={styles.product__content__item__price}>
                                    <p>{prod.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className={styles.product__content__skeleton}>
                        <div className={styles.product__content__skeleton__image} />
                        <div className={styles.product__content__skeleton__name} />
                        <div className={styles.product__content__skeleton__category} />
                        <div className={styles.product__content__skeleton__price} />
                    </div>
                )}
            </div>
        </div>
    );
}
