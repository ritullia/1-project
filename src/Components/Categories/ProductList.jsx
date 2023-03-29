import { ListItem } from "../ListItem";
import { TernaryListItem } from "../TernaryListItem";
import {
  LogicalOperatorItem,
  LogicalOrOperatorItem,
} from "../LogicalOperatorItem";
import { TravelListItem, IsImprtant } from "../TravelListItem";

export const ProductList = () => {
  return (
    <>
      <ul>
        <ListItem productName="Batonas" isBought={true} />
        <ListItem productName="Pienas" isBought={false} />
        <ListItem productName="Kefyras" isBought={true} />
        <ListItem productName="Duona" isBought={false} />
      </ul>
      <ul>
        <TernaryListItem
          productName="Dzinsai"
          isBought={true}
        ></TernaryListItem>
        <TernaryListItem
          productName="Megstinis"
          isBought={false}
        ></TernaryListItem>
        <TernaryListItem productName="Kedai" isBought={true}></TernaryListItem>
        <TernaryListItem
          productName="Kelnes"
          isBought={false}
        ></TernaryListItem>
        <TernaryListItem
          productName="Sijonas"
          isBought={true}
        ></TernaryListItem>
      </ul>
      <ul>
        <LogicalOperatorItem productName="Slides" isBought={true} />
        <LogicalOperatorItem productName="Paspirtukas" isBought={false} />
        <LogicalOperatorItem productName="Dviratis" isBought={true} />
        <LogicalOperatorItem productName="Rieduciai" isBought={false} />
        <LogicalOperatorItem productName="Kamuolys" isBought={true} />
      </ul>
      <ul>
        <LogicalOrOperatorItem productName="Slides" isBought={false} />
        <LogicalOrOperatorItem productName="Paspirtukas" isBought={true} />
        <LogicalOrOperatorItem productName="Dviratis" isBought={true} />
        <LogicalOrOperatorItem productName="Rieduciai" isBought={false} />
        <LogicalOrOperatorItem productName="Kamuolys" isBought={true} />
      </ul>
      <ul>
        <TravelListItem
          productName="Degtukai"
          isPacked={false}
          importance={5}
        />
        <TravelListItem productName="Knyga" isPacked={true} importance={3} />
        <TravelListItem
          productName="Kelioninis peiliukas"
          isPacked={true}
          importance={0}
        />
        <TravelListItem
          productName="Programuotojo žinynas"
          isPacked={false}
          importance={0}
        />
      </ul>
      <ul>
        <IsImprtant productName="Degtukai" isPacked={false} importance={0} />
        <IsImprtant productName="Knyga" isPacked={true} importance={2} />
        <IsImprtant
          productName="Kelioninis peiliukas"
          isPacked={true}
          importance={4}
        />
        <IsImprtant
          productName="Programuotojo žinynas"
          isPacked={false}
          importance={5}
        />
      </ul>
    </>
  );
};
