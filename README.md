# smart-table with flexbox and CSV export
I needed a table that:
 - supports sorting,
 - supports filtering (both column based and global)
 - is responsive preferbably using CSS rather that a polling JS loop
 - can be displayed so the content of the table is the only element that changes size as the viewport changes height
 - still supports exporting to CSV. As a bonus, the export honours the filters. You'll probably want to turn off paging to get all available rows.

This uses:
 - angular-smart-table: https://lorenzofox3.github.io/smart-table-website/#top
 - ng-table-to-csv: https://github.com/kollavarsham/ng-table-to-csv
 - the SO answer: https://stackoverflow.com/a/24979148/1410035

# How to run

        git clone <this repo>
        cd <this repo>
        bower install
        ./webserver.sh
        # open localhost:8080

# Demo
https://tomsaleeba.github.io/smart-table-flexbox/
