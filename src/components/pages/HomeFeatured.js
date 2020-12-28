import React from "react";
import ShoppingItem from "./ShoppingItem";
import EmbroidBracelet from "../../images/items/embroidered-bracelet.jpg";
import GoldBracelet from "../../images/items/gold-arrow-bracelet.jpg";
import GoldBangle from "../../images/items/simple-gold-bracelet.jpg";
import StackedSet from "../../images/items/stacked-bracelets-set.jpg";
import AnchorBraceletGold from "../../images/items/anchor-bracelet-gold.jpg";
import AnchorBraceletMen from "../../images/items/anchor-bracelet-for-men.jpg";
import PatternedBangle from "../../images/items/patterned-bangle.jpg";
import NecklaceDetail from "../../images/items/necklace-detail.jpg";

export default function HomeFeatured() {
  return (
    <section className="home_featured">
      <div className="mb-s home_featured_heading heading-3 heading-3--gold">
        Featured
      </div>
      <div className="home_featured_items">
        <ShoppingItem imageSrc={EmbroidBracelet}>
          Embroid Bracelet,$1000
        </ShoppingItem>
        <ShoppingItem imageSrc={GoldBracelet}>
          Gold Arrow Bracelet, $2500
        </ShoppingItem>
        <ShoppingItem imageSrc={GoldBangle}>Gold Bangle, $1800</ShoppingItem>
        <ShoppingItem imageSrc={StackedSet}>
          Stacked Bracelets, $2000
        </ShoppingItem>
        {/* <ShoppingItem imageSrc={AnchorBraceletGold}>
          Anchor Gold Bracelet, $3500
        </ShoppingItem>
        <ShoppingItem imageSrc={AnchorBraceletMen}>
          Anchor Bracelet, $1500
        </ShoppingItem>
        <ShoppingItem imageSrc={PatternedBangle}>
          Patterned Bangle, $1000
        </ShoppingItem>
        <ShoppingItem imageSrc={NecklaceDetail}>
          Necklace Detail, $4000
        </ShoppingItem> */}
      </div>
    </section>
  );
}
