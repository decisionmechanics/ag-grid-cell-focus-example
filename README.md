# ag-grid Cell Focus Problem Minimal Example

When using the React Data Grid in `Read Only Edit` mode the cell focus isn't maintained between refreshes.

`enterMovesDownAfterEdit` doesn't move to the next cell after the data has been changed. The app shows the same behavior when using the down arrow key to end an edit and navigate to the cell below.

The app uses the simple table of cars from the "Getting Started" example. To replicate the problem, edit the price of a Toyota Celica and hit `Enter`. The cell will update, but the focus has been lost, so the next cell is not selected.

The following versions of packages are used:

- react: 18.1.0
- ag-grid: 27.2.1
