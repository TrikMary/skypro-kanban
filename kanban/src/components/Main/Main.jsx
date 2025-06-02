import { Card } from "../Card/Card";

import { Column } from "../Column/Column";
import { statusList, cardList} from "../../data.js";

export function Main ({  }) {
    return (
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column />


            </div>
          </div>
        </div>
      </main>
    );
}