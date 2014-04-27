package pl.tomaszdziurko.reading;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

public class Main {

    private DateTime startDate;
    private int pages;
    private int pagesPerDay;

    public static void main(String[] args) {

//        if (args.length != 2) {
//            throw new RuntimeException("Invalid number of args, it should be <startdate dd/MM/yyyy> numberOfPages");
//        }
//        Main main = new Main(args[0], Integer.parseInt(args[1]));


        Main main = new Main("20/04/2014", 337, 10);

        main.run();
    }

    public Main(String dateString, int pages, int pagesPerDay) {
        this.pagesPerDay = pagesPerDay;
        startDate = DateTimeFormat.forPattern("dd/MM/yyyy").parseDateTime(dateString).minusDays(1);
        this.pages = pages;
    }

    public void run() {

        DateTime currentDate = new DateTime(startDate);
        int currentPage = pages;
        String currentValue = pages + "";
        do {
            String dateString = currentDate.toString("dd/MM");

            System.out.println(String.format("['%5s',   %4s,  %4s], ", dateString, currentPage, currentValue));
            currentPage = currentPage - pagesPerDay;
            currentDate = currentDate.plusDays(1);
            currentValue = "null";
            if (currentPage <= 0) {
                System.out.println(String.format("['%5s',   %4s,  %4s]", currentDate.toString("dd/MM"), 0, currentValue));
            }
        } while(currentPage > 0);
    }
}
