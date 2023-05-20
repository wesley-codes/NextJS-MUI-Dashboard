import { PieTooltipProps } from "@nivo/pie";
import { BarDatum } from "@nivo/bar";

import React from "react";

interface DataItem {
  id: String;
  value: String;
}

interface CustomTooltipProps extends PieTooltipProps {
  data: DataItem;
}

const Tooltip: React.FC<PieTooltipProps<BarDatum>> = () => {
  return <div>Tooltip</div>;
};

export default Tooltip;
