import { ProductType } from "@/types/product.type";
import styles from "./Products.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ProductView({ prods }: { prods: ProductType[] }) {
    return (
        <div className={styles.product}>
            <h1 className={styles.product__title}>Products Page</h1>
            <div className={styles.product__content}>
                {prods?.length > 0 ? (
                    <>
                        {prods?.map((prod: ProductType) => (
                            <Link href={`/products/${prod.id}`} key={prod.id} className={styles.product__content__item}>
                                <div className={styles.product__content__item__image}>
                                    {/* <img src={prod.image} alt={prod.name} /> */}
                                    <Image src={prod.image} alt={prod.name} width={500} height={500} />
                                </div>
                                <h4 className={styles.product__content__item__name}>{prod.name}</h4>
                                <p className={styles.product__content__item__category}>{prod.category}</p>
                                <div className={styles.product__content__item__price}>
                                    <p>{prod.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                                </div>
                            </Link>
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
