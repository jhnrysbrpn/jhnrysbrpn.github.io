#include <stdio.h>

int main() {
    char sname[50], subject[50], another_process;
    int sno, passed = 0, failed = 0, total_processed = 0;
    float mdGrade, fGrade, average;

    printf("\t XYZ International College\n");
    printf("\t\tMakati, City\n");

    do {
        printf("\nStudent Number: ");
        scanf("%d", &sno);
        getchar();  

        printf("Student Name: ");
        fgets(sname, sizeof(sname), stdin);

        printf("Subject: ");
        fgets(subject, sizeof(subject), stdin);

        printf("Midterm Grade: ");
        scanf("%f", &mdGrade);

        printf("Final Grade: ");
        scanf("%f", &fGrade);

        average = (mdGrade + fGrade) / 2;

        printf("\n\nStudent Number: %d\n", sno);
        printf("Student Name: %s", sname);
        printf("Subject: %s", subject);
        printf("Average Grade: %.2f\n", average);

        if (average <= 3.0) {
            printf("Remark: Passed\n");
            passed++;
        } else {
            printf("Remark: Failed\n");
            failed++;
        }

        total_processed++;

        printf("\nProcessed Another? Y/N: ");
        getchar(); 
        scanf("%c", &another_process);

    } while (another_process == 'Y' || another_process == 'y');

    printf("\nTotal No. of Student Passed: %d\n", passed);
    printf("Total No. of Student Failed: %d\n", failed);
    printf("Total No. of Student Processed: %d\n", total_processed);

    return 0;
}
