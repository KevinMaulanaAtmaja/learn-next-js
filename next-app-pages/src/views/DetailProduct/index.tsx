import { ProductType } from "@/types/product.type";
import React from "react";
import styles from "./DetailProduct.module.scss";

export default function DetailProductView({ prod }: { prod: ProductType }) {
    return (
        <>
            <h1 className={styles.title}>Detail Product</h1>
            <div className={styles.productDetail}>
                <div className={styles.productDetail__image}>
                    <img src={prod.image && prod.image} alt={prod.name} />
                </div>
                <h4 className={styles.productDetail__name}>{prod.name}</h4>
                <p className={styles.productDetail__category}>{prod.category}</p>
                <div className={styles.productDetail__price}>
                    <p>{prod.price && prod.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
                </div>
            </div>
        </>
    );
}
