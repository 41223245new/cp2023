var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'USA', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n', 'tags': '', 'url': 'USA.html'}, {'title': 'ROC', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n\n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n', 'tags': '', 'url': 'ROC.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件 \n// https://blog.csdn.net/weixin_38468077/article/details/101069365 \n// http://www.gnuplot.info/demo/ \n// https://github.com/sysprog21/rv32emu \n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 \n// https://cs61c.org/fa23/ \n// https://greenteapress.com/wp/think-python-2e/ \n// https://github.com/ecalvadi/c99-examples \n// https://github.com/gouravthakur39/beginners-C-program-examples \n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples \n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf \n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf \n// https://jsomers.github.io/cbook/cbook.pdf \n// https://jsomers.github.io/cbook/index.html \n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf \n// http://cslibrary.stanford.edu/101/EssentialC.pdf \n// https://publications.gbdirect.co.uk/c_book/ \n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf \n// ***** 在 replit 上執行 \n// CD 下載 \n// cc gnuplot_ex1.c -o gnuplot_ex1 \n// ./gnuplot_ex1 \n#include <stdio.h> \n \n// 主函式 \nint main() { \n    // 使用 popen 啟動 Gnuplot 進程 \n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w"); \n    如果（！gnuplotPipe）{ \n        fprintf(stderr, "無法啟動 Gnuplot。\\n"); \n        返回1； \n    } \n \n    // 使用Gnuplot繪圖指令，指定字型並輸出為PNG \n    fprintf(gnuplotPipe, "設定終端 png 字體 \'預設,10\' 大小 800,400\\n"); \n    fprintf(gnuplotPipe, "設定輸出 \'./../images/gnuplot_ex1.png\'\\n"); \n    fprintf(gnuplotPipe, "繪製 sin(x)"); \n    // 關閉popen \n    pclose(gnuplotPipe); \n \n    返回0； \n} \n 清除 \n 光碟下載 \n 抄送 gnuplot_ex1.c \n ./a.輸出 \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1 加到 100 cango_三_齒輪 BS蛇 人工智慧俄羅斯方塊 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 檔案名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'w5.html'}]};