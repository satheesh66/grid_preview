# Your role is Seniour frontend enginerr who has 10years of exp and build a html react app for the folllowing requirement

## Grid Rules (must be satisfied)

1. The grid has 36 columns (index starts at 1). Row height = 4px; rows are unbounded.
2. In our grid there is no column-gap or row-gap , so strictly don't add the grid-gaps in the layout calculations.
3. colStart / rowStart are inclusive; colEnd / rowEnd are exclusive (colSpan = colEnd - colStart, rowSpan = rowEnd - rowStart).
4. Gutters: at least 1 empty column OR 4 empty row must exist between any two widgets; no bounding-box overlap is allowed.
5. Limits:
   • 1 ≤ colStart < colEnd ≤ 37
   • 1 ≤ rowStart < rowEnd
   • colSpan ≥ 2, rowSpan ≥ 4
6. Stay inside the canvas; obey the gutter rule.
7. Base the size/placement primarily on each widget’s LayoutConfig; minor adjustments are allowed to meet the above constraints.
8. All widgets are direct children of one container.
9. Add appropriate CSS style properties in the "WidgetStyles" field and use the provided color palette. WidgetStyles can accept any CSS style property.
10. While generating GridLayoutConfig, strictly refer to each widget’s LayoutConfig for the minimum and maximum values of colSpan or rowSpan.
11. Strictly use the provided widgets LayoutConfig values as base for generating GridLayoutConfig.

## Input data

{
"Name": "Manager dashboard",
"Description": "Manager dashboard displaying approval load and leave analytics for team members.",
"Children": [
{
"ReferenceFromWidgetList": {
"WidgetName": "Card Report",
"Appearance": "A simple card widget will display the numerical insights as a label",
"WhenToUse": "Use this widget to see the data in card visualisation",
"WidgetMetadata": {
"FlowId": "Pending_Approvals",
"FlowName": "Pending Approvals",
"FlowType": "CardReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
},
"LayoutConfig": {
"minColSpan": 11,
"minRowSpan": 34
}
},
"GridLayoutConfig": {
"colSpan": 12,
"rowSpan": 35,
"colStart": 1,
"rowStart": 1
},
"WidgetStyles": {
"backgroundColor": "Color.Primary.100",
"color": "Color.Primary.700",
"borderRadius": "8px",
"padding": "16px"
},
"WidgetMetadata": {
"FlowId": "Pending_Approvals",
"FlowName": "Pending Approvals",
"FlowType": "CardReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
}
},
{
"ReferenceFromWidgetList": {
"WidgetName": "Card Report",
"Appearance": "A simple card widget will display the numerical insights as a label",
"WhenToUse": "Use this widget to see the data in card visualisation",
"WidgetMetadata": {
"FlowId": "Pending_Approvals",
"FlowName": "Pending Approvals",
"FlowType": "CardReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
},
"LayoutConfig": {
"minColSpan": 11,
"minRowSpan": 34
}
},
"GridLayoutConfig": {
"colSpan": 12,
"rowSpan": 35,
"colStart": 13,
"rowStart": 1
},
"WidgetStyles": {
"backgroundColor": "Color.Primary.100",
"color": "Color.Primary.700",
"borderRadius": "8px",
"padding": "16px"
},
"WidgetMetadata": {
"FlowId": "Pending_Approvals",
"FlowName": "Pending Approvals",
"FlowType": "CardReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
}
},
{
"ReferenceFromWidgetList": {
"WidgetName": "Card Report",
"Appearance": "A simple card widget will display the numerical insights as a label",
"WhenToUse": "Use this widget to see the data in card visualisation",
"WidgetMetadata": {
"FlowId": "Pending_Approvals",
"FlowName": "Pending Approvals",
"FlowType": "CardReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
},
"LayoutConfig": {
"minColSpan": 11,
"minRowSpan": 34
}
},
"GridLayoutConfig": {
"colSpan": 12,
"rowSpan": 35,
"colStart": 25,
"rowStart": 1
},
"WidgetStyles": {
"backgroundColor": "Color.Primary.100",
"color": "Color.Primary.700",
"borderRadius": "8px",
"padding": "16px"
},
"WidgetMetadata": {
"FlowId": "Pending_Approvals",
"FlowName": "Pending Approvals",
"FlowType": "CardReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
}
},
{
"ReferenceFromWidgetList": {
"WidgetName": "Chart Report",
"Appearance": "A card-style widget featuring a bar chart with rounded bars, a primary color scheme, minimalistic axes, and an interactive tooltip for data details.",
"WhenToUse": "Use this widget to see the data in chart visualisation",
"WidgetMetadata": {
"FlowId": "Leave_Requests_By_Status",
"FlowName": "Leave Requests By Status",
"FlowType": "ChartReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
},
"LayoutConfig": {
"minColSpan": 19,
"minRowSpan": 85
}
},
"GridLayoutConfig": {
"colSpan": 18,
"rowSpan": 100,
"colStart": 1,
"rowStart": 36
},
"WidgetStyles": {
"backgroundColor": "Color.White",
"color": "Color.Gray.900",
"border": "1px solid #e7e8eb",
"borderRadius": "8px",
"padding": "16px"
},
"WidgetMetadata": {
"FlowId": "Leave_Requests_By_Status",
"FlowName": "Leave Requests By Status",
"FlowType": "ChartReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
}
},
{
"ReferenceFromWidgetList": {
"WidgetName": "Chart Report",
"Appearance": "A card-style widget featuring a bar chart with rounded bars, a primary color scheme, minimalistic axes, and an interactive tooltip for data details.",
"WhenToUse": "Use this widget to see the data in chart visualisation",
"WidgetMetadata": {
"FlowId": "Leave_Days_by_Type",
"FlowName": "Leave Days by Type",
"FlowType": "ChartReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
},
"LayoutConfig": {
"minColSpan": 19,
"minRowSpan": 85
}
},
"GridLayoutConfig": {
"colSpan": 18,
"rowSpan": 100,
"colStart": 19,
"rowStart": 36
},
"WidgetStyles": {
"backgroundColor": "Color.White",
"color": "Color.Gray.900",
"border": "1px solid #e7e8eb",
"borderRadius": "8px",
"padding": "16px"
},
"WidgetMetadata": {
"FlowId": "Leave_Days_by_Type",
"FlowName": "Leave Days by Type",
"FlowType": "ChartReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
}
},
{
"ReferenceFromWidgetList": {
"WidgetName": "Chart Report",
"Appearance": "A card-style widget featuring a bar chart with rounded bars, a primary color scheme, minimalistic axes, and an interactive tooltip for data details.",
"WhenToUse": "Use this widget to see the data in chart visualisation",
"WidgetMetadata": {
"FlowId": "Leave_Days_by_Type",
"FlowName": "Leave Days by Type",
"FlowType": "ChartReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
},
"LayoutConfig": {
"minColSpan": 19,
"minRowSpan": 85
}
},
"GridLayoutConfig": {
"colSpan": 36,
"rowSpan": 100,
"colStart": 1,
"rowStart": 135
},
"WidgetStyles": {
"backgroundColor": "Color.White",
"color": "Color.Gray.900",
"border": "1px solid #e7e8eb",
"borderRadius": "8px",
"padding": "16px"
},
"WidgetMetadata": {
"FlowId": "Leave_Days_by_Type",
"FlowName": "Leave Days by Type",
"FlowType": "ChartReport",
"ParentDetails": {
"FlowId": "LeaveRequest",
"FlowName": "Leave Request",
"FlowType": "Process"
}
}
}
]
}

## Requirement

I want to see the preview of the above json in the css grid layout (with provided specification) for that build the app

## Rules

1. Use Native css for building this app and use grid layout for grid specification
2. Don't add too much boilerplate code
3. use vite for bundling
4. UI strictly should be top notch
