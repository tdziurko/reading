package pl.tomaszdziurko.reading;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

public class Main {

    private DateTime startDate;
    private int pages;

    public static void main(String[] args) {

//        if (args.length != 2) {
//            throw new RuntimeException("Invalid number of args, it should be <startdate dd/MM/yyyy> numberOfPages");
//        }
//        Main main = new Main(args[0], Integer.parseInt(args[1]));


        Main main = new Main("30/10/2013", 335);

        main.run();
    }

    public Main(String dateString, int pages) {
        startDate = DateTimeFormat.forPattern("dd/MM/yyyy").parseDateTime(dateString);
        this.pages = pages;
    }

    public void run() {

        DateTime currentDate = new DateTime(startDate);
        int currentPage = pages;
        do {
            String dateString = currentDate.toString("dd/MM");

            System.out.println(String.format("['%5s',   %4s,   %4s], ", dateString, currentPage, "null"));
            currentPage = currentPage - 10;
            currentDate = currentDate.plusDays(1);

            if (currentPage <= 0) {
                System.out.println(String.format("['%5s',      0,   %4s] ", dateString, "null"));
            }
        } while(currentPage > 0);
    }
}
