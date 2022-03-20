import s from "../component/BirthChart/BirthChart.module.scss";
import {ReactElement} from "react";

export enum ARROW_NAME {
    PLANNING = 'BẠN SỞ HỮU MŨI TÊN KẾ HOẠCH (ĐỦ 1 - 2- 3)',
    WILL = 'BẠN SỞ HỮU MŨI TÊN Ý CHÍ (ĐỦ 4 - 5 - 6)',
    ACTION = 'BẠN SỞ HỮU MŨI TÊN HOẠT ĐỘNG (ĐỦ 7 - 8 - 9)',
    REALISTIC = 'BẠN SỞ HỮU MŨI TÊN THỰC TẾ (ĐỦ 1 - 4 - 7)',
    EMOTIONAL_BALANCE = 'BẠN SỞ HỮU MŨI TÊN CÂN BẰNG CẢM XÚC (CÓ ĐỦ 2 - 5 - 8)',
    INTELLIGENCE = 'BẠN SỞ HỮU MŨI TÊN SÁNG TRÍ (CÓ ĐỦ 3 - 6 - 9)',
    DETERMINATION = 'BẠN SỞ HỮU MŨI TÊN QUYẾT TÂM (CÓ ĐỦ 1 - 5 - 9)',
    RELIGIOUS = 'BẠN SỞ HỮU MŨI TÊN TÂM LINH (CÓ ĐỦ 3 - 5 - 7)'
}

export enum NON_ARROW_NAME {
    INDECISION = 'BẠN SỞ HỮU MŨI TÊN TRÌ HOÃN (THIẾU ĐỦ 1 - 5 - 9)',
    SCEPTICISM = 'BẠN SỞ HỮU MŨI TÊN HOÀI NGHI (THIẾU ĐỦ 3 - 5 - 7)',
    POOR_MEMORY = 'BẠN SỞ HỮU MŨI TÊN TRÍ NHỚ NGẮN HẠN (THIẾU ĐỦ 3 - 6 - 9)',
    EMOTIONAL_SENSITIVITY = 'BẠN SỞ HỮU MŨI TÊN NHẠY CẢM (THIẾU ĐỦ 2 - 5 - 8)',
    IMPRACTICALITY = 'BẠN SỞ HỮU MŨI TÊN THIẾU TRẬT TỰ (THIẾU ĐỦ 1 - 4 - 7)',
    FRUSTRATION = 'BẠN SỞ HỮU MŨI TÊN UẤT GIẬN (THIẾU ĐỦ 4 - 5 - 6)',
    HESITATION = 'BẠN SỞ HỮU MŨI TÊN THỤ ĐỘNG (THIẾU ĐỦ 7 - 8 - 9)'
}

type TArrow = {
    key: number
    style: string
    title: string
    meaning: ReactElement
}[]

export const NON_ARROW_MEANING: TArrow = [
    {
        key: 159,
        style: s.arrow159,
        title: NON_ARROW_NAME.INDECISION,
        meaning: <div>
            <p>Ngược với Mũi tên Quyết tâm 1-5-9, những người có ngày sinh thiếu cả ba con số 1, 5, 9 sẽ có Mũi tên
                trống 1-5-9 trong Biểu đồ ngày sinh,<strong><em> với đặc điểm chung là... tính thiếu quyết tâm, hay do
                    dự, trì hoãn thực hiện những điều cần làm. </em></strong>Vì vậy mũi tên này được gọi là <strong><em>Mũi
                    tên Trì hoãn</em></strong>. Tất cả những ai sinh ra vào những năm 19xx của thế kỷ 20 đều không vướng
                mũi tên trống này. Chỉ có những người chào đời từ năm 2000 trở đi mới có khả năng gặp phải Mũi tên Trì
                hoãn, và nhiều người trong số đó còn trống thêm rất nhiều cột khác, do trong ngày sinh quá nhiều số 0
                hoặc có nhiều số lặp lại.</p>
            <p>Tuy nhiên, cũng có một tin tốt lành là so với các mũi tên trống khác, Mũi tên Trì hoãn ít xuất hiện hơn
                rất nhiều, vì trong một tháng có nhiều ngày đều có ít nhất một số 1 (ví dụ các ngày 1, 11, 21, 31) . Bên
                cạnh đó, những người có sinh nhật vào tháng 5, tháng 9 mỗi năm, và những người sinh năm 2005 , 2009 ,
                2015 , 2019... cũng yên tâm không vướng mũi tên trống này. Nhìn trên Biểu đồ ngày sinh, Mũi tên trống
                1-5-9 xẻ biểu đồ ra làm hai nửa rõ ràng, chia cắt những con số mang tính trực giác (bao gồm 2 , 3 , 6)
                và những con số mang tính vật chất thực tế (bao gồm 4 , 7 , 8) . <strong><em>Vì vậy, những tên này sẽ dễ
                    lần lữa, trì hoãn mọi việc, thậm chí... không làm gì cả. Đặc điểm đó có thể được điều chỉnh nếu được
                    phát hiện sớm.</em></strong></p>
            <p>Do đó các bậc phụ huynh và thầy cô cần lưu ý để nhận ra đặc điểm này ở trẻ để có thể uốn nắn kịp
                thời. <strong><em>Nếu cứ kéo dài thì tính trì hoãn dễ ăn sâu vào gốc rễ và gây hại cho cuộc sống của
                    những người mang mũi tên này, ảnh hưởng rất tiêu cực đến sự phát triển hay thành công của họ, cũng
                    như liên tục khiến bản thân họ lẫn mọi người xung quanh cảm thấy vô cùng khó chịu.</em></strong></p>
            <p><strong><em>Tuy nhiên bạn có thể phá thế trống bằng cách đặt tên riêng, hoặc điền các con số
                ảo.</em></strong> Hãy tìm kiếm các bài viết phá thế trống trên website nhe.</p>
        </div>
    },
    {
        key: 357,
        style: s.arrow357,
        title: NON_ARROW_NAME.SCEPTICISM,
        meaning: <div>
            <p>Mũi tên trống 3-5-7 này xuất hiện khi ngày sinh của bạn không có bất kỳ con số 3 , 5 , 7 nào. Trong Biểu
                đồ ngày sinh, mũi tên trong này được tạo thành bởi đường thẳng kéo dài từ ô trống ở góc trên cùng bên
                trái xuống ô trống ở góc dưới cùng bên phải. <em><strong>Vì thiếu cả ba số 3,5 và 7 nên tính chất của cả
                    ba con số này đều vắng mặt, hệ quả là những người này sẽ dễ hoài nghi cuộc sống, như cái tên của mũi
                    tên miêu tả.</strong></em></p>
            <p>Và vì thiếu hẳn ít nhất là ba số trong tổng cộng chín số tự nhiên, nên tỷ lệ các con số khác bị lặp lại
                trong Biểu đồ ngày sinh này là khá cao, dẫn đến tình trạng bị thừa những số mà chỉ có một số một ô là lý
                tưởng nhất, tức là các con số từ 3 đến 9. Cụ thể, vì thiếu 3 , 5 và 7 nên xác suất lặp lại các số 4 , 6
                , 8 , 9 khá cao. Bên cạnh đó, nhiều hơn hai số 1 và hai số 2 cũng không tốt.</p>
            <p><strong><em>Những người có Mũi tên trống 3-5-7 thường có vẻ khá đa nghi, hay đặt câu hỏi “ Tại sao?
                ” </em></strong>cho hầu như mọi vấn đề trong cuộc sống, đặc biệt là những vấn đề họ mới gặp lần đầu.
                Điều này làm cho cuộc sống của họ mệt mỏi, thậm chí có vẻ hơi tiêu cực. Tuy nhiên, sau khi họ đã cất
                công tìm hiểu kỹ càng đến tận căn nguyên vấn đề, nếu điều đó thuyết phục được họ thì họ sẽ thể hiện sự
                chấp nhận một cách rõ ràng, ngược lại, nếu đã không đồng tình điểm nào thì họ sẽ dứt khoát gạt luôn quan
                điểm đó sang một bên. <strong><em>Với Bản chất của những người thuộc nhóm này là có máu tìm hiểu, tìm
                    tòi, nên có rất nhiều nhà nghiên cứu khoa học có mũi tên đặc thù này. </em></strong>Nhìn chung,
                những người này sẽ bắt đầu nghiền ngẫm dựa trên nền tảng các kiến thức cơ bản, thứ được xem là chuẩn mực
                trong bất kỳ lĩnh vực nào họ đang theo đuổi, và thường bỏ qua cơ hội đào sâu những khía cạnh triết lý
                sâu sắc hơn của đời sống con người, hoặc nếu có nhìn ra thì họ cũng đặt chúng vào vị trí thứ yếu.</p>
            <p><strong><em>Vì có quá nhiều điều làm họ cảm thấy hồ nghi về cuộc sống, họ trở nên khá nóng nảy và dễ rơi
                vào thế bị động.</em></strong> Nếu không có ý thức tự điều chỉnh bản thân, họ sẽ trở thành nạn nhân của
                chứng rối loạn lo âu (hay lo lắng thái quá), kèm theo các triệu chứng như nhức đầu và một số vấn đề tâm
                lý khác.</p>
            <p>Trạng thái lo lắng, bồn chồn có thể dẫn đến nhiều phản ứng tiêu cực, gây ra những tai nạn bất ngờ và
                thường ảnh hưởng đến vùng đầu. <strong><em>Do đó, đối với những người có Mũi tên trống 3-5-7, điều đặc
                    biệt cần thiết là họ cần phát triển một cái nhìn sâu sắc hơn về các triết lý sống để nhận ra rằng có
                    những điều không chỉ được cảm nhận bởi năm giác quan thông thường. </em></strong>Nếu vì một lý do gì
                đó mà những người này cảm thấy thất vọng với một tôn giáo, tín ngưỡng hay nền khoa học vốn được xem là
                chính thống, họ có xu hướng phản ứng với thái độ bất cần, thiếu tin tưởng với các đức tin hay triết lý
                trong cuộc sống. Điều này lại khiến họ thêm chán nản với cuộc đời.</p>
            <p>Cách tốt nhất để những người có Mũi tên trống 3-5-7 khắc phục xu hướng này là <em><strong>hãy tự phát
                triển cho mình một mục đích sống cụ thể, nuôi dưỡng lòng thương yêu con người, thương yêu muôn loài một
                cách mạnh mẽ hơn, và học cách thể hiện bản thân một cách sâu sắc hơn thông qua các hình thức nghệ thuật
                như viết lách, vẽ, âm nhạc, ...</strong></em></p>
            <p><em><strong>Trẻ con có Mũi tên trống 3-5-7 thường thể hiện tính hoài nghi qua trạng thái ủ rũ, tâm trạng
                lên xuống thất thường</strong></em>. Nhưng nếu các bậc cha mẹ hiểu được nguyên nhân gây ra tình trạng đó
                thì họ sẽ có thể giúp trẻ điều chỉnh để có thái độ tích cực hơn, cũng như giúp trẻ tìm được sự bình yên
                trong tâm hồn bằng cách tránh xa các chương trình truyền hình hỗn loạn, các trò chơi lộn xộn trên điện
                thoại hay máy tính bảng hoặc những người bạn quá ồn ào.</p>
            <p><em><strong>Khi có điều gì làm trẻ con có mũi tên trống này phật lòng, chúng có xu hướng trốn vào bên
                trong nội tâm mình.</strong></em> Sự cách biệt này là một cách để chúng tự cân bằng cảm xúc và tinh
                thần. <em><strong>Các bậc phụ huynh có thể giúp trẻ bằng phương pháp hai bước như sau: Đầu tiên, hãy
                    khuyến khích trẻ đọc nhiều sách về tự nhiên, khoa học, địa lý và tìm hiểu lý do đằng sau những hiện
                    tượng đang diễn ra, cũng như phát triển tính tò mò tích cực, sau đó, hãy khuyến khích trẻ chủ động
                    theo đuổi một bộ môn nghệ thuật nào đó, như học chơi một loại nhạc cụ, học vẽ, làm đồ gốm, nặn tượng
                    .</strong></em></p>
            <p><span><strong>Lưu ý </strong></span>: Trẻ con có Mũi tên trống 3-5-7 cần rất nhiều
                tình thương và cần được đối xử tử tế, nhưng phụ huynh không được quá nuông chìu trẻ. Hãy kiên nhẫn nhưng
                vẫn phải kiên quyết và cứng rắn, nếu không, trẻ sẽ lợi dụng sự cưng chiều này và sinh hư.</p>
            <p><em><strong>Mặt khác, cha mẹ cũng không bao giờ nên quay lưng lại với trẻ chỉ vì chúng không hành xử
                đúng. </strong></em>Hãy nhớ là trẻ luôn phản ứng lại những hành động của cha mẹ, vì vậy việc cha mẹ mặc
                kệ hoặc tỏ ra “ không thương nữa ” càng thổi bùng các phản ứng tiêu cực ở trẻ, và chúng sẽ thể hiện điều
                này theo cách duy nhất mà chúng biết: tỏ ra giận dỗi hoặc cô lập bản thân nhiều hơn. Điều này chỉ làm
                cho tình hình của trẻ trở nên tệ hơn mà thôi. <strong><em>Tình yêu thương sẽ chiến thắng tất cả, nên các
                    bậc phụ huynh có con thuộc nhóm này hãy cố gắng thể hiện tình yêu thương đúng mức và sự nghiêm khắc
                    vừa phải.</em></strong></p>
        </div>
    },
    {
        key: 369,
        style: s.arrow369,
        title: NON_ARROW_NAME.POOR_MEMORY,
        meaning: <div>
            <p><strong><em>Người có Mũi tên Trí nhớ ngắn hạn này là những người phải cố gắng nhiều để bảo đảm trí nhớ
                của họ luôn trong trạng thái năng động và nhanh nhạy, và họ cần ý thức giữ nỗ lực này suốt
                đời. </em></strong>Chỉ cần họ ỷ lại hay trở nên lười suy nghĩ dù chỉ trong một quãng thời gian ngắn, trí
                nhớ của họ, cùng với sức sáng tạo và các lý tưởng sống, sẽ nhanh chóng bị mai một.</p>
            <p><strong><em>Điều đáng lo là trong nửa quãng thời gian đầu tiên của cuộc đời, những người này vẫn rất bình
                thường, thậm chí học rất giỏi; tuy nhiên, từ nửa quãng đời sau, chứng suy giảm trí nhớ bắt đầu có nhiều
                ảnh hưởng tương đối nặng nề đến cuộc sống của họ. </em></strong>Điều này diễn ra từ từ, phát triển thành
                các triệu chứng của<strong><em> “ tính khí con nít ”</em></strong> , tức là những biểu hiện y như con
                nít ở người già; sau đó, triệu chứng nhanh chóng trở nên trầm trọng hơn, thành chứng mất trí nhớ
                Alzheimer ở người lớn tuổi. Tất cả những ai sinh ra trong những năm 19xx của thế kỷ 20 đều không có mũi
                tên trống này. <strong><em>Nhưng theo Thầy David, ở các thế kỷ trước đó, vẫn có những người dù không có
                    số 9 trong ngày sinh, họ vẫn nỗ lực khắc phục điểm yếu và học hỏi được những điều cần thiết cho cuộc
                    sống. Để làm được điều đó, họ phải cực kỳ bền chỉ trong cuộc chiến đấu chống lại sự chậm hiểu của
                    chính mình và luôn nỗ lực giữ cho trí não nhanh nhạy, tỉnh táo để duy trì bản thân ở trạng thái tốt
                    nhất.</em></strong></p>
            <p>Những người này thường tươi sáng và khôn ngoan, bản thân cuộc đời họ cũng là tấm gương sáng cho nhiều
                người noi theo. Tuy nhiên, khi nhìn vào hiện tượng bên ngoài, điều thú vị là không ít các bạn hoàn toàn
                trống trục 3-6-9 mà vẫn học khá, giỏi trong lớp. <strong><em>Dù sao đi nữa, các bậc cha mẹ vẫn cần phải
                    để ý để phòng tránh chứng suy giảm trí nhớ ở các con vào nửa quãng đời sau.</em></strong></p>
            <p><strong><em>Trẻ em Có Mũi tên trong 3-6-9 cần nhận được sự đào tạo tương đối đặc biệt và cần nhiều sự
                kiên nhẫn trong những năm tháng đầu đời.</em></strong> Các em sẽ có vẻ hơi chậm về mặt suy nghĩ, cần
                được dạy cách tăng cường khả năng tập trung, thứ quan trọng để phát triển trí nhớ. Tiếp theo, các em có
                thể được khuyến khích khả năng sáng tạo và tăng cường ý thức về thế giới tự nhiên xung quanh các em -
                những điều này mang ý nghĩa của số 6 và sẽ giúp các em rất nhiều. Trẻ em thuộc nhóm này được Thầy David
                khuyên không nên đi học quá sớm - ít nhất từ năm tuổi hãy học trường mẫu giáo, hoặc bảy tuổi hãy bắt đầu
                đến trường cũng được. V<strong><em>à khi các em đi học, phụ huynh và thầy cô đừng đặt nặng chuyện kiến
                    thức hay thành tích, mà hãy tập trung phát triển cho trẻ ý thức kỷ luật, kế đó là các hình thức sáng
                    tạo hay nghệ thuật đa dạng.</em></strong></p>
            <p>Đến bảy tuổi, trẻ có thể bắt đầu học kiến thức phổ thông. Nếu bị đưa vào hệ thống giáo dục như bình
                thường, rất có thể trẻ sẽ bị các chứng nhức đầu, trường hợp nặng có thể dẫn đến chứng đau nửa
                đầu. <strong><em>Những đứa trẻ có mũi tên trong này thường thích thiên nhiên hơn khoa học, nên cha mẹ và
                    thầy cô cần nhẹ nhàng dạy các con một cách cẩn trọng và kiên nhẫn, từ từ trẻ sẽ có thể tiến bộ lên
                    rất nhiều.</em></strong></p>
        </div>
    },
    {
        key: 147,
        style: s.arrow147,
        title: NON_ARROW_NAME.IMPRACTICALITY,
        meaning: <div>
            <p>Khi ngày tháng năm sinh của bạn hoàn toàn không có các số 1, 4 và 7, bạn đã nằm trong nhóm những người có
                mũi tên trống khá đặc biệt, <em><strong>đó là Mũi tên Thiếu trật tự.</strong></em></p>
            <p>Thật ra, bạn sẽ thấy tất cả những người sinh từ năm 1999 trở về trước đều không thể vướng vào mũi tên
                này. Chỉ có các bạn trẻ sinh ra từ năm 2000 trở đi mới có thể có mũi tên này trong Biểu đồ ngày
                sinh.</p>
            <p>Khi được sinh ra mà lại không có Con số nào trong Trục ngang Thể chất, người này sẽ phải chấp nhận một
                khuyết điểm đáng kể, thứ cần được vượt qua và hoàn thiện ngay trong đời này, nếu họ muốn đạt được hạnh
                phúc trong cuộc sống. <strong><em>Khi một người chỉ có thế mạnh nằm trên Trục ngang Tình thần (trục
                    2-5-8) , hoặc chỉ có Trục ngang Tinh thần và Trục ngang Trí não (gồm 3-6-9) , họ dễ có khuynh hướng
                    Sa vào một cuộc đời nặng về lý thuyết.</em></strong></p>
            <p>Khi đó, mọi suy nghĩ, ý tưởng cảm xúc... chỉ có thể là lý thuyết, cho đến khi nó được đưa vào đời sống
                thực tế thông qua Trục ngang chất. Nếu không có những hoạt động thực tế, cuộc sống trở nên rối loạn và
                không đáng thỏa mãn, tước mất của con người niềm vui khi được nhìn thấy những ý tưởng của mình trở thành
                hiện thực. <em><strong>Những người có Mũi tên trống 1-4-7 cần có trải nghiệm thực tế và tính kiên nhẫn
                    thì mới phát triển được sự cân bằng ở cả ba trục Thể chất - Trí não - Tinh thần, nếu không, họ sẽ
                    sống trong sự hỗn loạn, thiếu trật tự ở nhiều mặt.</strong></em></p>
            <p><strong><em>Khi vận dụng được sự nhạy cảm của mình trong thực tế, họ sẽ cảm nhận được niềm vui khi nhìn
                thấy thành quả lao động của mình như được cởi trói để có cơ hội phát triển. </em></strong>Nếu không
                làm được điều này, họ có khả năng trở thành người trì trệ, không thiết tha làm việc để nuôi sống bản
                thân. <strong><em>Nhiều trường hợp không được can thiệp để uốn nắn từ nhỏ thì đến lớn sẽ khó mà sửa được
                    và có thể phải sống nhờ vào sự giúp đỡ của người khác.</em></strong></p>
            <p><strong><em>Trẻ Con Có Mũi tên trống 1-4-7 cần được dạy để trở nên thực tế và ngăn nắp càng sớm càng tốt,
                ngay từ khi trẻ vừa biết đi chập chững. </em></strong>Trẻ nên được khuyến khích tập trung làm cho xong
                mỗi lần một việc rồi mới tiếp tục làm qua việc khác, không thì sẽ chẳng có việc nào được hoàn thành
                cả. <strong><em>Trẻ sẽ cần sự chú ý đáng kể từ cha mẹ hay người lớn xung quanh, những người phải chịu
                    khó bày ra các trò chơi mang tính thực tiễn với chúng (những trò có liên quan đến cầm, nắm, đếm,
                    tính toán hay trải nghiệm thực tế, có dọn dẹp sau khi chơi xong) . Trẻ cũng cần được giao cho các
                    công việc nho nhỏ trong nhà, như dọn dẹp góc phòng, sân nhà, ... mỗi khi có thể. </em></strong>Mỗi
                lần trẻ hoàn thành những nhiệm vụ này, ngoài lời động viên và khen ngợi, cha mẹ nên chuẩn bị những phần
                thưởng be bé cho trẻ.</p>
        </div>
    },
    {
        key: 456,
        style: s.arrow456,
        title: NON_ARROW_NAME.FRUSTRATION,
        meaning: <div>
            <p>Nếu như Mũi tên Ý chí 4-5-6 khá hiếm, thì ngược lại,<em><strong> số người có Mũi tên trống 4-5-6 trong
                Biểu đồ ngày sinh lại khá nhiều,</strong></em> tạo thành một xã hội mà trong đó người hài lòng thì ít,
                kẻ uất giận lại nhiều. Với sự vắng mặt của cả ba con số 4 , 5 và 6, mũi tên này tạo thành một Biểu đồ
                ngày sinh bị chia cắt thành hai nửa và một ý chí khá yếu ớt cho những ai sở hữu nó. Thầy David ghi nhận
                một chi tiết rất đáng suy ngẫm: suốt những thập niên 1940 , 1950 , 1960, mũi tên này không hề xuất hiện
                lần nào. Điều này góp phần tạo ra những thế hệ can trường, có ý chí mạnh mẽ.</p>
            <p>Tuy nhiên, khi bước qua thập niên 70, chúng ta bắt đầu thấy nhiều người Có Mũi tên uất giận. Vì là nhà
                nghiên cứu và chữa trị cho nhiều khách hàng khác nhau, <strong><em>Thầy David từng gặp nhiều trường hợp
                    có mũi tên này, và họ thường phải gánh chịu khá nhiều vấn đề lớn trong cuộc sống, chẳng hạn như gia
                    đình tan vỡ, các mối quan hệ tình cảm không vui vẻ, hay bị trầm cảm</em></strong>. Sự “ uất giận ”
                này đến từ những kỳ vọng không được thỏa mãn. <strong><em>Cũng theo Thầy David, người có mũi tên này
                    thường kỳ vọng ở người khác nhiều hơn những gì bản thân họ sẵn sàng cho đi. </em></strong>Nhưng nếu
                họ có thể học cách chấp nhận và trân trọng người khác vì sự độc đáo của riêng mỗi người, thì họ sẽ không
                cần đặt kỳ vọng sai chỗ nữa. V<strong><em>à cũng từ đó, thói quen “ kỳ vọng, mong cầu ” sẽ phai nhạt
                    bớt, họ sẽ sống an nhiên và hạnh phúc hơn . </em></strong>Như vậy, bài học dành cho những người Có
                Mũi tên trống 4-5-6 là hiểu <span><em><strong>“ kỳ vọng ” theo hướng “ Có thì tốt, không có cũng không
                    sao ” , nghĩa là “ Tận nhân lực, tri thiên mệnh ”.</strong></em></span> Khi
                đó họ vẫn nỗ lực nhưng sẽ không đến nỗi héo hon trong sự thất vọng vì kết quả không như mong đợi. Những
                người có mũi tên này cần biết rằng không ai là hoàn hảo, bởi nếu đã hoàn hảo thì chúng ta đâu cần trở
                lại kiếp sống này để có cơ hội học hỏi và hoàn thiện mình.</p>
            <p><em><strong>Mỗi người đều đang ở những giai đoạn tiến hóa riêng - Có người là những “ linh hồn già ” hơn
                thì mức độ hiểu biết, chín chắn và lòng trắc ẩn của họ sẽ dày và sâu hơn những linh hồn non trẻ -
                nên hãy để cho mỗi linh hồn được phát triển tùy duyên, không nên gượng ép. </strong></em>Đối với con
                người, lòng biết ơn chính là chất kích thích tăng trưởng hữu hiệu nhất, nhưng lòng biết ơn phải chân
                thành thì mới có thể phát huy tác dụng này lâu dài. Và bạn thấy đó, trong cuộc sống, có biết bao nhiêu
                cách thức khác nhau để con người lĩnh hội các bài học của cuộc đời.</p>
            <p><strong><em>Những người có Mũi tên trống 4-5-6 nên ý thức rằng những thất vọng, tổn thất, chia rẽ và cả
                sự vỡ mộng trong cuộc đời chính là những bước đi cần thiết và rất ý nghĩa trong hành trình dài hướng về
                sự hoàn thiện của linh hồn chúng ta. </em></strong>Nếu họ nhận ra điều này, những buồn thương sẽ dần
                biến mất. Ngược lại, họ sẽ chìm trong nỗi buồn, sự cô độc hay cảm giác bị từ chối, bị lạc
                lõng. <em><strong>Tập cảm thông với người khác, xây dựng lòng trắc ẩn sẽ giúp các vấn đề của họ giảm
                    đi. </strong></em>Trẻ Con có mũi tên trong này rất cần sự quan tâm và yêu thương đặc biệt. Chúng có
                thể bị đẩy vào các hoàn cảnh mà trong đó, chúng trở thành nạn nhân của những trò bất công hay ác ý của
                bạn bè, và thậm chí là của những người quen biết đã khiến chúng thất vọng. Quá trình này lặp đi lặp lại
                sẽ khiến trẻ có tâm trạng thất thường, từ đó càng thêm bối rối và buồn vui bất chợt.</p>
            <p><strong><em>Cha mẹ của những đứa trẻ thuộc nhóm này cần dạy trẻ tôn trọng người khác, để mỗi người được
                thể hiện đúng bản tính của mình và biết rằng không phải lúc nào người khác cũng làm theo ý của trẻ.</em></strong> Bằng
                cách này, chúng sẽ học được khái niệm <strong><em>“ Con thích ” thay cho “ Con muốn ”</em></strong> , để
                tâm trạng của chúng không bị cột chặt vào một kết quả nhất định nào nữa. Một điều đặc biệt quan trọng
                nữa là cha mẹ cần tạo ra một mối quan hệ thân thiết với con. Đây không đơn giản chỉ là chuyện tôn trọng
                hay ngoan ngoãn nghe lời, đó còn là sự tin yêu đối với cha mẹ. Một “ tình bạn ” đặc biệt như vậy sẽ làm
                dịu tâm trạng thất thường ở trẻ, nhất là khi trẻ có thể chia sẻ mọi điều với cha mẹ mà không bị đánh giá
                hay phải giải thích cho hành động của mình.</p>
        </div>
    },
    {
        key: 789,
        style: s.arrow789,
        title: NON_ARROW_NAME.HESITATION,
        meaning: <div>
            <p>Thoạt nhìn, chúng ta sẽ thấy người sở hữu mũi tên này không có sự trải nghiệm để trưởng thành của số 7,
                không có trí tuệ và khả năng cảm thụ của số 8, và cũng không Có hoài bão và trách nhiệm của số 9 - hẳn
                là người này sẽ rất thụ động, không tự tạo động lực để tiến lên phía trước được.</p>
            <p><em><strong>Nhưng hãy nhớ rằng tất cả những người này đều được trang bị một sức mạnh bẩm sinh mà không
                phải ai trong thiên niên kỷ trước cũng có, đó chính là số 2, Con số của trực giác, của sự kết nối với vũ
                trụ bao la. </strong></em>Và khi họ có rất nhiều số 0 trong Biểu đồ ngày sinh, đặc biệt là khi trống cả
                dãy 7-8-9, <strong><em>họ sẽ có cơ hội để trở thành Vô cùng</em></strong>. Vì vậy, theo dự đoán của Thầy
                David (ông chỉ có thể dự đoán, vì thời điểm quyển sách của ông được xuất bản là năm 1992) , những người
                có Mũi tên trống 7-8-9 sẽ có nhiều khả năng trở thành những người tư duy, lên kế hoạch và dẫn dắt sau -
                hậu - trường cho cả kỷ nguyên mới, khi rất nhiều người có mũi tên trong này lại có Mũi tên Kế hoạch
                (1-2-3) . <em><strong>Tuy vậy, những người này sẽ không thể chạm đích thành công nếu không được rèn
                    luyện về sự kiên trì và tinh thần kỷ luật thông qua những chương trình đào tạo ” ở cả trường học lẫn
                    trường đời.</strong></em></p>
            <p>Tuy nhiên, điểm hạn chế lớn nhất của những người có mũi tên này là họ thường không tự thức dậy được, mà
                cần sự tác động từ bên ngoài - chẳng hạn như một bài học, một Con người, một trường năng lượng nào đó
                đánh thức Trực giác và Tiềm thức đang say ngủ của họ. Và quan trọng nhất, họ luôn cần có sự quan tâm,
                khuyến khích, thúc đẩy sự thức tỉnh này, vì họ thường có vẻ lừ đừ, lười vận động. <em><strong>Họ sẽ
                    không tự nhận ra mục đích của họ khi đến với cuộc sống này, và do đó luôn cần được hướng dẫn, bảo
                    ban và rèn luyện để trở nên năng động hơn trong cuộc sống thường ngày. Nếu được nhắc nhở về sự thức
                    tỉnh và lan tỏa này ngay từ thuở nhỏ, họ sẽ có nhiều khả năng đạt được thành tựu.</strong></em></p>
        </div>
    },
    {
        key: 258,
        style: s.arrow258,
        title: NON_ARROW_NAME.EMOTIONAL_SENSITIVITY,
        meaning: <div>
            <p>Vì nằm ở Trục ngang Tinh thần nên mũi tên trống này cũng cho thấy một sự thiếu hụt mang tính chất tinh
                thần. Theo nghiên cứu của Thầy David, việc thiếu hụt những con số trong trục này không có nghĩa là người
                này không có đời sống nội tâm, mà thực chất, nó diễn tả sự bảo vệ phần tâm hồn của người này không đủ
                mạnh. <strong><em>Do đó, sự nhạy cảm của họ lộ ra, tiếp xúc với thế giới bên ngoài - vốn hiền có dữ có
                    và có xu hướng lợi dụng sự yếu ớt của những tâm hồn quá nhạy cảm này .</em></strong></p>
            <p>Vì vậy, Mũi tên trống 2-5-8 thể hiện sự nhạy cảm, dễ tổn thương, đặc biệt là trong giai đoạn đầu đời, khi
                người ta bộc lộ toàn bộ sự nhạy cảm này mà chưa biết dựng lên lớp tường rào bảo vệ cảm xúc của
                mình. <strong><em>Họ dễ cảm thấy bị xúc phạm, dễ xuống tinh thần, do đó thường rụt vào bên trong và trở
                    nên bẽn lẽn, nhút nhát.</em></strong></p>
            <p>Nhiều người thuộc nhóm này rất dễ rơi vào cảm giác tự ti từ rất sớm, khiến họ gặp một số khó khăn khi
                giao tiếp xã hội và dễ mất lòng tin nơi người khác. Khi đến tuổi trưởng thành, một vài người trong số họ
                vượt qua được những cảm xúc phức tạp này bằng cách kiểm soát tốt cảm xúc. <strong><em>Những người này
                    thậm chí còn thành danh trong một số lĩnh vực mà họ dốc sức vào, hoặc nắm thế chủ động trong các
                    tình huống hay các cuộc trao đổi để bảo vệ bản chất nhạy cảm tự nhiên của mình.</em></strong></p>
            <p><strong><em>Một số người khác học được cách chủ động tấn công người khác và coi đây như một cách tự
                vệ. </em></strong>Đặc điểm này dễ xảy ra ở những người thiếu chuỗi số 2-5-8 nhưng lại có Mũi tên Trí tuệ
                (3-6-9) , hoặc có Con số chủ đạo nằm ở Trục ngang Trí não (số 3,6 hoặc 9) . <strong><em>Sự nhạy cảm tự
                    nhiên đã cho họ bản tính giàu tình yêu thương và dịu dàng, nhưng họ thường có phản ứng thụ động vì
                    những tổn thương về cảm xúc, khiến họ tự xây dựng cho mình một vẻ ngoài cứng rắn, thứ mâu thuẫn với
                    biểu cảm nhẹ nhàng , tự nhiên ở họ. </em></strong>Họ học cách bày tỏ cảm xúc tùy vào đối tượng mà
                mình tương tác - một kiểu phân biệt đối xử.</p>
            <p><strong><em>Điều này khiến nhiều người sở hữu mũi tên trống này gặp trắc trở trong đời sống tình cảm, vì
                họ vô tình thể hiện không đúng bản chất con người mình, từ đó khiến người thương hiểu
                lầm.</em></strong> Đôi khi những người Có Mũi tên trống 2-5-8 Có vẻ rất bướng bỉnh, thậm chí là “ nghênh
                ngang ” , nhưng đây chỉ là những lớp vỏ họ dựng lên để che đậy sự bẽn lẽn nhút nhát cố hữu của mình mà
                thôi. Họ luôn dễ bị tổn thương về mặt cảm xúc, một điều mà rất hiếm người có mũi tên này hoàn toàn hiểu
                được hay vượt qua được.</p>
            <p><strong><em>Một trong những bài học quan trọng nhất mà những người này cần lĩnh hội chính là học cách
                kiểm soát cảm xúc, càng sớm càng tốt. </em></strong>Như ở trên đã đề cập, đối với một tác nhân kích động
                chúng ta có hai khuynh hướng phản ứng: phản ứng thụ động và phản ứng chủ động. Những người có Mũi tên
                Nhạy cảm cần phân biệt được hai cách phản ứng này để không còn xem mình là nạn nhân của hoàn cảnh hoặc
                thụ động phản ứng với ý kiến của người khác. <strong><em>Họ cần học cách làm những người tiên phong,
                    người truyền cảm hứng và thực hiện những mục tiêu đáng giá. </em></strong>Thông qua các nỗ lực đó,
                họ sẽ nhận ra sức mạnh của riêng mình, xóa đi sự mặc cảm tự ti, và chính sức mạnh này sẽ giúp họ cân
                bằng lại các đặc điểm của mình, đạt được một số thành quả trong cuộc sống.</p>
            <p><strong><em>Điều này rất quan trọng, vì từ nền tảng đó, họ sẽ từ từ đi lên, đạt được thêm nhiều thành tựu
                mới, nhiều quả ngọt mới. Kết quả, sự hiểu biết của họ cũng sẽ gia tăng, lòng tin vào cuộc sống, vào con
                người của họ cũng được phục hồi. </em></strong>Trẻ em Có Mũi tên trống 2-5-8 thường đặc biệt nhút nhát,
                nhạy cảm. Một số em khi đi ra ngoài đường, giữa đám đông, thường cúi gằm đầu xuống để che giấu sự tự ti
                của mình.</p>
            <p><strong><em>Tuy nhiên, bằng sự kiên nhẫn, tình yêu thương và sự tử tế, cha mẹ, thầy cô và những người lớn
                xung quanh có thể dễ dàng giúp trẻ vượt qua điểm hạn chế này. </em></strong>Các bậc phụ huynh nên dành
                nhiều thời gian trò chuyện, lắng nghe và chia sẻ với con, vì những nỗi sợ hãi, lo lắng, bồn chồn thường
                rất thật trong đầu óc còn non nớt của trẻ. <em><strong>Cha mẹ cũng cần khuyến khích con diễn đạt thành
                    lời những vấn để Con đang cảm thấy, vì điều này sẽ giúp trẻ cân bằng cảm xúc và cả cảm giác an toàn
                    khi dám biểu lộ sự nhạy cảm của bản thân.</strong></em></p>
            <p><strong><em>Trẻ có Mũi tên trống 2-5-8 khao khát tình yêu thương nhiều hơn những đứa trẻ bình thường
                khác. </em></strong>Chúng tìm kiếm mọi cơ hội để được gần gũi những người mà chúng yêu thương và cũng
                yêu thương chúng. Vì thế, cha mẹ nên tạo điều kiện cho con tham gia các hoạt động thú vị, bổ ích. Đồng
                thời, đừng quên khen ngợi hay cổ vũ con khi con làm tốt, vì đó chính là thứ mà chúng rất cần.</p>
            <p><strong><em>Ngược lại, nếu trẻ lỡ có làm việc gì đó không đạt hay tỏ ra có phần nghịch ngợm, đừng rầy la
                hay chỉ trích con trước mặt người khác, đặc biệt là trước mặt các bạn đồng trang lứa. </em></strong>Vì
                hành động đó chẳng khác nào “ đóng mộc ” sự mặc cảm tự ti cho con, đồng thời cũng làm mất đi lòng tin
                hay kính trọng của con. Thay vào đó, Cha Mẹ và Thầy Cô nên trao đổi riêng với trẻ, giúp trẻ tìm ra cách
                thức tốt đẹp nhất để giải quyết vấn đề.</p>
        </div>
    }
]

export const ARROW_MEANING: TArrow = [
    {
        key: 123,
        style: s.arrow123,
        title: ARROW_NAME.PLANNING,
        meaning: <div>
            <p>Mũi tên của trục dọc 1-2-3 là một trong những mũi tên thường gặp nhất đối với thế hệ 19xx và
                2xXx. <strong><em>Thế hệ này rất dễ có cả ba con số trên hội tụ trong Biểu đồ ngày sinh, nên không khó
                    đoán rằng giai đoạn này có nhiều người giỏi hoạch định. </em></strong>Và bạn có thấy cách chúng được
                xếp cùng nhau không? Số 1 - đại diện cho sự biểu đạt cái tôi cá nhân - được liên kết với trực giác của
                số 2, tiếp tới là trí nhớ và các khả năng phân tích dữ liệu của số 3. Cả ba yếu tố này hội tụ sẽ cho ra
                rất nhiều kế hoạch tuyệt vời.</p>
            <p><strong><em>Người có Mũi tên Kế hoạch rất thích trật tự đâu ra đó, có phương pháp thực hiện, có thấu hiểu
                vấn đề. Nhưng họ thường đặt mình vào vị trí “ người tổ chức ” hơn là “ người thực hiện ” các chi
                tiết</em></strong>, trừ khi họ có thêm Mũi tên Thực tế (1-4-7) , hoặc có Con số chủ đạo thuộc nhóm Thể
                chất (4 , 7 , 10 hay 22/4) . Với khả năng hoạch định xuất sắc như vậy, người có mũi tên này cần lưu ý
                tránh <em><strong>“ nổi máu lười ” .</strong></em> Nghe có vẻ phi lý nhưng thực tế là vậy, <strong><em>đặc
                    biệt là khi họ liên tục giao kế hoạch cho người khác thực hiện mà không chú ý theo dõi, giám sát
                    tiến độ thực hiện.</em></strong></p>
            <p><em><strong>Họ cũng cần lưu tâm hơn vào các chi tiết nhỏ và đừng phó mặc với suy nghĩ tiểu tiết không
                quan trọng . </strong></em>Trẻ con có Mũi tên Kế hoạch sẽ vui nhất khi được tự tay thiết kế, tổ chức
                những kế hoạch nho nhỏ cho bạn bè hay gia đình. Nhưng nếu các kế hoạch này gặp trở ngại hoặc xung đột
                với kế hoạch khác từ cha mẹ, trẻ có thể rất thất vọng. <strong><em>Chỉ khi nào cha mẹ thật kiên nhẫn và
                    bày tỏ tình yêu thương thật nhẹ nhàng thì chúng mới “ bỏ qua ” nỗi thất vọng này.</em></strong></p>
            <p><em><strong>Những đứa trẻ thuộc nhóm này thường tỏ ra khá tách biệt,</strong></em> coi nhiều điều đang
                diễn ra là lẽ đương nhiên và thường chìm đắm trong những suy nghĩ hoặc kế hoạch riêng của chúng. Sự tách
                biệt này thể hiện ra ngoài thành vẻ xa cách, từ từ có thể trở thành thói quen phớt lờ, không lưu tâm đến
                nhu cầu của người khác. <em><strong>Các bậc phụ huynh và thầy cô cần áp dụng kỷ luật yêu thương nhưng
                    nghiêm khắc, cứng rắn để yêu cầu trẻ phải hợp tác. </strong></em>Những đứa trẻ này cũng cần tránh bị
                bắt nạt hoặc hù dọa, mà thay vào đó, chúng cần được dạy dỗ nhẹ nhàng để biết tôn trọng các ý kiến, thói
                quen hay các đồ vật thuộc sở hữu của người khác. Trẻ có Mũi tên 1-2-3 thường nhẹ nhàng , đáng tin cậy và
                chậm nhận ra sự bất công. <em><strong>Sự ngây thơ này có thể rất dễ thương, mặc dù đôi khi chính sự cả
                    tin này khiến trẻ bị tổn thương khi chúng nhận ra những người xung quanh không dễ tin và dễ bị lừa
                    như mình.</strong></em></p>
            <p>Trong những năm đầu đời, trẻ có Mũi tên 1-2-3 thỉnh thoảng gặp phải cảm giác bồn chồn, lo lắng, vì dành
                quả nhiều thời gian trong tâm trí mà không biết cách thể hiện năng lượng trí não này ra thực
                tế. <strong><em>Lúc này, cha mẹ hoặc người lớn xung quanh có thể giúp trẻ bằng cách khuyến khích trẻ
                    năng động hơn, thường xuyên vận động ngoài trời, hòa mình vào thiên nhiên</em></strong>. Cho trẻ đọc
                sách du ký có tranh minh họa cũng rất hữu ích cho đến khi chúng đủ lớn để có điều kiện tự trải nghiệm du
                lịch, giúp chúng thỏa mãn sự ham học hỏi và khám phá những điều chưa biết.</p>
        </div>
    },
    {
        key: 456,
        style: s.arrow456,
        title: ARROW_NAME.WILL,
        meaning: <div>
            <p>Nếu Mũi tên Quyết tâm 1-5-9 có thể bắt gặp ở Biểu đồ ngày sinh của rất nhiều người được sinh ra trong thế
                kỷ 20, thì Mũi tên Ý chí - mũi tên kết nối cả ba <strong><em>Con số 4-5-6 của trục dọc ở giữa là mũi tên
                    rất ít người có.</em></strong> Khi số 6 - đại diện cho sự sáng tạo - được gắn liền với sự tự do thể
                hiện của số 5, rồi kết nối với số 4 của óc tổ chức thực tiễn, chúng ta có sự cân bằng đầy sức mạnh của
                cả ba Con số trung tâm của cả ba trục: Thể chất - Trí não - Tình thần. <strong><em>Đây chính là Mũi tên
                    Ý chí. Nó đại diện cho cột sống của con người và nguồn lực sự sống tuôn chảy trong đó.</em></strong>
            </p>
            <p>Trong giai đoạn từ 1889 đến 1999, bất kỳ ai có Mũi tên Ý chí đều được “ tặng ” thêm Mũi tên Quyết tâm,
                làm cho họ trở thành những người hết sức năng động. Tuy nhiên, theo Thầy David, không có nhiều người nổi
                tiếng có “ tổ hợp vàng ” này, có lẽ là do họ có xu hướng áp chế cảm xúc và mong muốn của người khác để
                khẳng định và thể hiện sức mạnh của bản thân. <strong><em>Động lực của họ mạnh mẽ đến mức họ thường bỏ
                    qua lời khuyên của người khác và hiếm khi lắng nghe trực giác của mình.</em></strong></p>
            <p>Sức mạnh đặc biệt của Mũi tên Ý chí nằm ở sự kết hợp và cân bằng của ba ưu điểm ở mỗi Trục (Thể chất -
                Trí não - Tình thần) . <strong><em>Khi người ta nhận ra sức mạnh của sự cân bằng đó và biết áp dụng vào
                    công việc hằng ngày, cuộc sống của họ sẽ thay đổi, và họ sẽ đạt được thành công cao
                    nhất.</em></strong> Họ đủ kiên cường và can đảm để phá bỏ mọi trở ngại khi hành động với sự khôn
                ngoan và thông thái. Hai nhân vật đại diện cho những người thành công đặc biệt với mũi tên này là đại
                văn hào người Anh <em><strong>William Shakespeare</strong></em>, và họa sĩ tài danh <em><strong>Leonardo
                    da Vinci</strong></em>.</p>
            <p><strong><em>Trẻ con có Mũi tên Ý chí có thể làm cha mẹ và thầy cô bận rộn</em></strong>. Trẻ có ý chí vô
                cùng mạnh mẽ, nhưng cần được dạy dỗ để có thể hiểu quan điểm của người khác và tiếp nhận sự hướng dẫn
                hợp lý. Một trong những điều mà nhóm trẻ này thích nhất chính là được làm những việc tử tế, nhưng chúng
                cần được chỉ dạy để biết rằng không nên có suy nghĩ tư lợi khi thực hiện những việc này, vì như vậy sẽ
                làm giảm bớt giá trị cao đẹp của việc chúng đang làm. Trẻ cũng sẽ trở nên đặc biệt cứng đầu và cực kỳ
                khó chịu nếu không được dạy dỗ một cách nhẹ nhàng , yêu thương và kiên nhẫn. <strong><em>Chúng thích
                    được khen khi làm tốt, nhưng sẽ lập tức nghi ngờ nếu được tặng những món vật chất như bánh kẹo hay
                    tiền... Nếu trẻ chấp nhận những món quà này, chúng có thể phát triển tính ham mê vật chất, trở thành
                    người sống về vật chất khi trưởng thành.</em></strong></p>
        </div>
    },
    {
        key: 789,
        style: s.arrow789,
        title: ARROW_NAME.ACTION,
        meaning: <div>
            <p><strong><em>Mũi tên hoạt động này nằm ở trục dọc ngoài cùng bên phải, </em></strong>kết nối số 7 - Con số
                của trải nghiệm, với số 8 - Con số của trí tuệ và khả năng cảm thụ, và số 9 - Con số của hoài bão và
                trách nhiệm. Sức mạnh của sự kết hợp này đôi khi bị quá đà, trở thành “ quá mức năng động ” , do con
                người là những sinh vật giàu biểu cảm nhất, vượt xa bất kỳ giống loài nào khác. Những biểu cảm này còn
                đặc biệt đa dạng và dễ nhìn thấy ở những người có Mũi tên 7-8-9.</p>
            <p><em><strong>Tuy nhiên, xã hội hiện đại với rất nhiều quy tắc đã ít nhiều cản trở sự tự do biểu đạt của
                họ, </strong></em>đến mức khiến họ dễ kích động bởi năng lượng bức bối ngày càng leo thang. Qua các
                nghiên cứu của mình, Thầy David nhận thấy hậu quả của điều này là họ dễ bị chứng hồi hộp thái quá, dẫn
                đến nhiều bệnh lý như hen suyễn, chứng ăn khó tiêu, nhức đầu hay đau nửa đầu, hoặc các vấn đề về tim
                mạch hay hệ thống tuần hoàn máu. <strong><em>Người có Mũi tên Hoạt động rất cần sự bình an và hòa hợp
                    với môi trường xung quanh.</em></strong> Các cuộc cãi vã, những chương trình truyền hình hoặc phát
                thanh quá ồn ào sẽ khiến họ cực kỳ căng thẳng, thậm chí gây ra các chứng bệnh có liên quan đến áp lực
                căng thẳng.</p>
            <p><strong><em>Họ cần dành càng nhiều thời gian với thiên nhiên càng tốt, vì họ không phải là người phù hợp
                với không khí của các thành phố lớn. </em></strong>Những hoạt động lý tưởng đối với họ là đi dạo trong
                Công viên, làm vườn, trồng trọt hoặc tham gia các hoạt động thể thao ngoài trời. Nếu không được tận
                hưởng những không gian tự do như vậy, họ sẽ dễ gặp vấn đề về hệ tiêu hóa. <em><strong>Thêm nữa, chế độ
                    ăn uống lành mạnh, cuộc sống hòa mình với thiên nhiên, cùng với cái nhìn tích cực về cuộc sống và
                    những người bạn vui vẻ sẽ có hiệu quả trong việc giúp những người Có Mũi tên 7-8-9 khỏe mạnh hơn bất
                    kỳ loại thuốc nào.</strong></em></p>
            <p>Trẻ em có mũi tên này đặc biệt ghét mọi loại tiếng ồn, đòi hỏi sự bình yên, yêu thương và hài hòa ở mọi
                việc chúng làm, mọi nơi chúng đi. <strong><em>Chúng cũng dễ bị kích động và ám ảnh nên rất cần sự tự do
                    trải nghiệm ngoài thiên nhiên, càng nhiều càng tốt. </em></strong>Chúng sẽ vui sướng nhất nếu được
                phép ăn, ngủ và chơi đùa bên ngoài thiên nhiên, vì những lúc đó, những cảm xúc của chúng được dịp thả
                lỏng. Những đứa trẻ này cũng cần ngủ nhiều, và một mái ấm không có căng thẳng hay cãi vã. <strong><em>Rất
                    nhiều người lớn sống trong cảnh không an vui hiện giờ vì tuổi thơ của họ kém bình yên - và chúng ta
                    cần rút kinh nghiệm về điều này, để thế hệ con cháu chúng ta không giẫm vào vết xe đổ.</em></strong>
            </p>
            <p>Sự ồn ào, căng thẳng hay nỗi bất an có thể ảnh hưởng rất nhiều đến chất lượng học tập của trẻ tại trường.
                Các bậc phụ huynh không nên cho trẻ tiếp xúc tiếng ồn nào, bao gồm cả các chương trình quá mức kích động
                trên tivi, radio hay các sự kiện trực tiếp diễn ra. Điều này cũng tác động đặc biệt đến trẻ sơ sinh Có
                Mũi tên uất giận, nên cha mẹ cần thận trọng.</p>
        </div>
    },
    {
        key: 147,
        style: s.arrow147,
        title: ARROW_NAME.REALISTIC,
        meaning: <div>
            <p><em><strong>Những người Có Mũi tên 1-4-7 là những người hay nắm phần việc, nghĩa là giỏi giang, tháo vát
                .</strong></em> Với cả ba số của Trục ngang Thể chất xuất hiện trên Biểu đồ ngày sinh, những người này
                chỉ cảm thấy vui và vừa ý với cuộc sống khi họ được thả mình vào những khía cạnh thực tế của công
                việc. <strong><em>Họ thường khá khéo tay, nhưng cần định hướng để sử dụng sự khéo léo này một cách khôn
                    ngoan vì họ thường có kiểu “ thích thì làm ” chứ không suy nghĩ tới lui cho thấu đáo.</em></strong>
            </p>
            <p>Tuy vậy, vai trò của những người này cũng khá quan trọng trong cuộc sống, bởi họ thích trải
                nghiệm. <strong><em>Họ là kiểu người phải trực tiếp trải nghiệm, có thấy mới tin .</em></strong> Đối
                với những người có Mũi tên 1-4-7 mà còn có Con Số chủ đạo là một trong những con số 4 , 7, hay 10, tính
                bị thu hút bởi vật chất sẽ được lộ rõ. <strong><em>Nếu Con số chủ đạo của họ nằm ở Trục ngang Tinh thần,
                    tức là số 2 , 5 , 8 hoặc 1 (và trong vài trường hợp, có luôn cả số 22/4 nữa) , họ sẽ vươn xa khỏi
                    những trói buộc của vật chất và có dễ dàng khả năng trở thành những nghệ sĩ hay nhạc công tài
                    năng.</em></strong></p>
            <p>Mặc dù nhìn chung họ thường có động lực là sự tử tế và mong muốn giúp đỡ người khác, nhưng việc có mũi
                tên nằm ở Trục ngang Thể chất khiến khả năng đánh giá Con người của họ không mấy chính xác. Động lực
                thúc đẩy những người có Mũi tên 1-4-7 thường đến từ những khát khao và hoài bão mang tính vật chất, trừ
                khi họ tích cực và chủ động tham gia các hoạt động sáng tạo, nghệ thuật.</p>
            <p><strong><em>Vì vậy, những người này cần lưu ý tránh lệ thuộc quá mức vào chủ nghĩa vật
                chất,</em></strong> thay vào đó, họ nên thể hiện sức mạnh một cách tích cực và hiệu quả, chẳng hạn như
                trở thành một nhà kinh doanh giỏi giang hoặc một nhà tổ chức có tư duy thực tế. <strong><em>Nếu lún quá
                    sâu vào phương diện vật chất, họ có thể trở nên hà khắc và không bao giờ tin tưởng giao cho ai làm
                    việc gì, bởi họ nghĩ chỉ có họ mới làm việc đó tốt nhất. </em></strong>Người Có Mũi tên 1-4-7 rất
                cần được rèn luyện để có cái nhìn cân bằng về mọi việc từ rất sớm. <strong><em>Khi nhận thức được sự
                    nhạy cảm của bản thân, cũng như hiểu được nhu cầu của người khác, họ sẽ có cơ hội sống vui vẻ, hạnh
                    phúc và trọn vẹn hơn. </em></strong>Trẻ em có Mũi tên 1-4-7 thường thể hiện nhu cầu vật chất ngay từ
                nhỏ.</p>
            <p><strong><em>Tuy nhiên, trẻ sẽ vui vẻ hơn nhiều nếu được đắm mình trong thiên nhiên và được học cách trân
                trọng biết ơn những giá trị cao hơn trong cuộc sống</em></strong>. Chúng cũng Có khuynh hướng coi mọi
                thứ là đương nhiên. <strong><em>Vì thế, ngay từ khi trẻ bắt đầu biết nói, cha mẹ và thầy cô cần dạy
                    chúng biết giá trị của lòng biết ơn và sự chia sẻ.</em></strong></p>
            <p>Những đứa trẻ này biết bày tỏ chính kiến từ bé, chuyện gì “ thích ” hay “ không thích ” đều tuyên bố rõ
                ràng, vì vậy Cha mẹ không nên ép con làm những việc mà chúng cực lực phản đối. <strong><em>Tình yêu
                    thương và sự tử tế luôn khiến những đứa trẻ này ngoan ngoãn, nhưng đừng bao giờ mong “ thu phục được
                    chúng bằng tiền hay những món quà.</em></strong></p>
            <p><em><strong>Đây cũng là những đứa trẻ rất thích các hoạt động thể chất, vì thế chúng ít khi từ chối các
                nhiệm vụ có liên quan đến phương diện thể chất,</strong></em> <em><strong>miễn là chúng được khen ngợi
                khi làm các việc này. </strong></em>Nếu ép trẻ làm những việc mà chúng cực lực phản đối, chúng sẽ tức
                giận và trở nên ương bướng. Điều này sẽ dẫn đến những trận phá phách, nổi loạn mà nếu không được nhìn
                nhận và điều chỉnh thì sẽ ngày càng leo thang, gây ra nhiều mệt mỏi cho mọi người xung quanh lúc chúng
                trưởng thành.</p>
            <p>Để tránh điều này, tốt nhất là không cho trẻ có Mũi tên 1-4-7 tiếp xúc gần hay chơi với những đối tượng
                có tính phá phách, nghịch ngợm. Cha mẹ nên tìm cho con những người bạn trầm tĩnh, nhạy cảm hơn, để giúp
                trẻ cân bằng hơn. Trẻ em thuộc nhóm Mũi tên 1-4-7 cũng rất thích chia sẻ, vì vậy sẽ có&nbsp;ích nếu phụ
                huynh cho chúng những món mà chúng có thể chia sẻ với bạn cùng lớp hay hàng xóm Xung quanh. <em><strong>Điều
                    này rất hữu ích cho trẻ trong việc phát triển tính nhạy cảm, biết lắng nghe, quan tâm tới nhu cầu
                    của người khác.</strong></em></p>
        </div>
    },
    {
        key: 258,
        style: s.arrow258,
        title: ARROW_NAME.EMOTIONAL_BALANCE,
        meaning: <div>
            <p><em><strong>Mũi tên này chỉ sự cân bằng về mặt cảm xúc</strong></em>.</p>
            <p>Tuy nhiên, khi tìm hiểu sâu những nội dung mà Thầy David mô tả thông qua các ca nghiên cứu của Thầy, tôi
                cho rằng những người có mũi tên này cũng phải để ý, vì lợi cũng có phần lợi, nhất là ở phần thiên hướng
                nghề nghiệp, nhưng cảm xúc chưa chắc thật sự cân bằng ” mọi lúc mọi nơi. Theo quyển The Complete Book of
                Numerology, Mũi tên Cân bằng cảm xúc được tạo thành từ sự có mặt của cả ba con số 2 , 5 và 8 trên Trục
                ngang Tinh thần ở giữa Biểu đồ ngày sinh. Trong ba Trục ngang quan trọng của con người, Trục ngang Tinh
                thần cho chúng ta thấy nhiều cách biểu đạt bản thân đa dạng phong phú nhất ở con người. Và nó cũng là
                trục chỉ cảm xúc, nên người Có Mũi tên 2-5-8 này sẽ có nhiều phong thái khác nhau cho từng hoàn cảnh
                khác nhau.</p>
            <p>Nói về mặt bẩm sinh, những người có Mũi tên 2-5-8 sở hữu khả năng cân bằng tự nhiên trong đời sống cảm
                xúc và một nhận thức khá sâu sắc về các giá trị tinh thần, thậm chí là tâm linh. Điều này đặc biệt giúp
                ích cho họ khi thế giới bắt đầu đi vào Kỷ nguyên mới của Nhận thức, từ thiên niên kỷ 2000 trở
                đi. <em><strong>Đối với những người này, cuộc sống là sự hòa hợp giữa đời sống vật chất và tâm linh, mà
                    trong đó, phần vật chất là tạm thời, còn tâm linh và tinh thần mới là vĩnh cửu.</strong></em> Nhận
                thức này tác động khá rõ lên thái độ của họ với cuộc sống, cũng như xu hướng nghiêm túc mọi lúc mọi nơi
                của họ. <strong><em>Họ nên tìm kiếm những người bạn đồng hành vui vẻ, lạc quan, và thỉnh thoảng tìm đến
                    những phương tiện giải trí nhẹ nhàng để tránh trở nên quá mức nghiêm túc và sống quá nội
                    tâm.</em></strong></p>
            <p><strong><em>Họ hiểu được thế nào là cân bằng ở khía cạnh cảm xúc và tinh thần, nhưng lại hay bỏ qua ý
                nghĩa sâu rộng hơn của nó ở những khía cạnh khác trong cuộc sống, như mặt thể chất và trí não chẳng
                hạn.</em></strong> Nhiều người trong số này thường tìm đến các lĩnh vực nghệ thuật hay giải trí để giải
                tỏa nhu cầu diễn đạt cảm xúc bản thân một cách cân bằng, nhưng hãy nhớ rằng nghệ thuật và giải trí chỉ
                là nghệ thuật giải trí, đừng để bản thân đắm chìm vào những hình ảnh hay hình tượng được thể hiện trong
                đó.<strong><em> Để duy trì được sự cân bằng cảm xúc dài lâu, họ cần ý thức mình chính là người chịu
                    trách nhiệm về những cảm xúc của mình, và không để cho cảm xúc khống chế bản thân, nếu không họ sẽ
                    bị lạc lối và mất phương hướng.&nbsp;</em></strong>Với khả năng kiểm soát cảm xúc mạnh mẽ như vậy,
                những người có Mũi tên 2-5-8 có thể trở thành những diễn viên xuất sắc. Sự nhạy cảm bẩm sinh cho phép họ
                nhập tâm hoàn toàn vào những vai diễn mà không phải hy sinh các đặc điểm tính cách riêng. Nhưng cho dù
                có làm diễn viên hay không thì những người này sẽ đóng nhiều vai trò cảm xúc khác nhau trong các hoạt
                động thường ngày, tại chỗ làm, trong các mối quan hệ xã hội và ở nhà. Sự nhạy cảm được cân bằng của
                những người có mũi tên này giúp họ ý thức được nhu cầu và thái độ của người khác một cách rõ ràng, tự
                nhiên.</p>
            <p>Khả năng này có thể được phát huy và giúp họ tỏa sáng trong lĩnh vực tư vấn hay chăm sóc sức khỏe, bởi họ
                đã có sẵn thiện khiếu ở những lĩnh vực này. <strong><em>Tuy nhiên, để đạt được thành công, họ nên được
                    đào tạo một cách bài bản về kỹ năng chăm sóc sức khỏe, để tránh rơi vào chủ nghĩa giáo điều vì trong
                    lĩnh vực này, không có phương pháp của ai là phương pháp đúng duy nhất. </em></strong>Không chỉ
                riêng những người có mũi tên này, mà tất cả những ai bước vào lĩnh vực y học và chăm sóc sức khỏe đều
                nên chủ động cởi mở và tiếp thu những phương pháp điều trị khác nhau.</p>
            <p><em><strong>Và trên hết, người có Mũi tên 2-5-8 cần nhận thức được rằng họ có bản chất nhạy cảm, giàu cảm
                xúc và một trực giác rất phát triển. </strong></em>Trẻ em Có Mũi tên 2-5-8 trong Biểu đồ ngày sinh
                thường vô cùng nhạy cảm, có thể có năng lực tâm linh mạnh mẽ, nên trẻ có thể bị chìm đắm trong thế giới
                của mình và được xem như những kẻ mơ mộng ” . Chúng dễ bị cuốn vào những mâu thuẫn cảm xúc, nhưng có
                khuynh hướng thu mình lại chứ không chủ động tham gia. <em><strong>Mong muốn tránh né những mối bất hòa
                    có thể khiến trẻ bị tụt lại phía sau trong các hoạt động ở trường và làm tổn hại sức khỏe của trẻ,
                    nếu chúng để cho sự nhạy cảm thường xuyên đẩy mình vào thế bị động, từ đó có những phản ứng tiêu cực
                    trong nhiều tình huống.</strong></em></p>
            <p><strong><em>Các bậc phụ huynh nên ý thức dạy Con cách giữ cân bằng về cảm xúc, điều mà chính cha mẹ cũng
                cần học để dạy con hiệu quả.</em></strong> Những đứa trẻ thuộc nhóm này cũng cần tránh những chương
                trình truyền hình hay phim ảnh quá ồn ào hoặc có nhiều yếu tố kích thích cảm xúc. Theo Thầy David, trẻ
                còn nên được ưu tiên ăn thực phẩm nguyên hạt và tự nhiên, hơn là thức ăn đóng gói và chế biến sẵn có
                nhiều hóa chất.</p>
        </div>
    },
    {
        key: 369,
        style: s.arrow369,
        title: ARROW_NAME.INTELLIGENCE,
        meaning: <div>
            <p><em><strong>Xin chúc mừng bạn! Bạn thuộc nhóm số ít những người có Mũi tên Trí tuệ -</strong></em> mũi
                tên cho thấy người sở hữu nó có nhiều lợi thế về các hoạt động tư duy, mà một trong số đó chính là trí
                nhớ vượt trội. <strong><em>Trí nhớ vượt trội lại mang đến rất nhiều ưu điểm khác, chẳng hạn như học lực
                    khá giỏi, khả năng ghi nhớ dài hạn và chi tiết.</em></strong></p>
            <p>Trên thực tế, sự có mặt của cả ba con số 3 , 6 , 9 trên Trục ngang Trí não đã chỉ ra tầm quan trọng của
                trí thông minh và cách người có mũi tên này chọn thể hiện bản thân mình. Nó cho thấy một bộ não cực kỳ
                năng động, thứ tạo điều kiện thuận lợi cho sự vượt trội của trí nhớ. <strong><em>Tuy nhiên, Thầy David
                    lưu ý rằng một số người sở hữu mũi tên này nhưng vẫn có trí nhớ kém dưới mức trung bình. Điều này
                    cho thấy họ đang lãng phí tài năng và trở nên lười tư duy.</em></strong> Nếu điều này không được
                phát hiện và điều chỉnh kịp thời, ưu thế bẩm sinh của họ sẽ bị mai một vì không được sử dụng thường
                xuyên, và cuối cùng, <em><strong>người này sẽ chịu cảnh cô độc bởi khó ai chịu nổi tỉnh gắt gỏng của họ
                    - mặt trái của một trí tuệ không được mài giũa.</strong></em></p>
            <p><strong><em>Nhìn chung, người có mũi tên này thường sáng dạ, sống khá tích cực và nhanh nhạy, thích những
                gì mang tính học thuật hơn tính thẩm mỹ.</em></strong> Họ thường chìm đắm trong suy nghĩ hơn là lặn ngụp
                giữa các cảm giác, mặc dù đôi khi họ cũng khá đa sầu đa cảm mà không nhận ra. Những người có mũi tên
                vàng này cần có ý thức tránh thái độ trịch thượng, chỉ tìm những ai mà họ cho rằng có trí tuệ ngang họ
                trở lên để chơi. <strong><em>Hãy phát triển lòng bao dung và tình yêu thương để hạn chế xu hướng tỏ thái
                    độ khó chịu với những người kém may mắn hơn mình về mặt trí tuệ. Chúng ta có thể khắc phục mọi điểm
                    yếu của mình, miễn là chúng ta biết phát huy năng lực bẩm sinh.</em></strong></p>
            <p><em><strong>Những người này thường phải gánh vác không ít trách nhiệm, họ cũng gặp không ít nghịch cảnh
                hay chướng ngại, nhưng họ thường giải quyết hoặc vượt qua các vấn đề này một cách tốt đẹp</strong></em>.
                Họ cũng là những người quảng giao, có thể dễ dàng tìm ra các lời lý giải hợp tình hợp lý cho hầu hết mọi
                tình huống nhưng hãy cẩn thận, bộ não tốt cỡ nào cũng cần được nghỉ ngơi. Nếu bộ não của họ không được
                nghỉ ngơi đủ, những người này thường cáu bẳn mà không có lý do rõ ràng. “ Triệu chứng này chính là lời
                cảnh báo họ phải nghiêm túc học cách cân bằng đời sống của mình giữa các khía cạnh tư duy, thể chất và
                nghệ thuật để đạt được thành công cao nhất. Những người có Mũi tên Trí tuệ thường không có trực giác tốt
                nếu trong ngày tháng năm sinh của họ không có số 2 - Con số chỉ trực giác, nằm ở Trục ngang Tinh thần.
                Lý do rất đơn giản, trực giác thuộc Tinh thần, không phải Trí não. Do đó, đôi khi những người rất thông
                minh, sáng trí này cũng bị... tắc nghẽn, không nắm bắt được một khái niệm đơn giản nào đó, chỉ vì họ
                không biết sử dụng trực giác của mình.</p>
            <p><em><strong>Trẻ Con Có Mũi tên Trí tuệ 3-6-9 thường nằm trong nhóm học sinh đứng đầu lớp, thậm chí là
                toàn trường, đặc biệt ở các môn tự nhiên như Toán hoặc các môn cần có khả năng phân
                tích.</strong></em> Các em nên được xếp vào các lớp năng khiếu để được bồi dưỡng kiến thức chuyên sâu,
                bao gồm những dự án phát triển trí não như các bộ môn nghiên cứu, tìm hiểu về thiên văn học... Trẻ nhóm
                này thường năng động và “ cứng đầu ” , đặc biệt là khi chúng cảm thấy những gì chúng đang được học chưa
                đủ tính thách thức. Trẻ thường cảm thấy vui khi những người xung quanh cần đến sự giúp đỡ của mình và sẽ
                rất nhiệt tình hợp tác. <strong><em>Trẻ cũng rất thích được khen ngợi về những nỗ lực của
                    mình.</em></strong></p>
            <p><strong><em>Đối với trẻ thuộc nhóm này, cha mẹ hoặc thầy cô cần lưu ý không đưa vào thực đơn của trẻ các
                loại thức ăn giàu chất kích thích hay hóa chất nhân tạo.</em></strong> Khi tới tuổi thiếu niên, trẻ
                thường dễ phấn khích, dễ bị kích động và tăng động nếu ăn đồ ăn linh tinh. Một vấn đề nữa mà phụ huynh
                cần lưu ý là trẻ nhóm này thường có não bộ “ chạy ” nhanh hơn miệng, nên một số em dễ mắc chứng cà lăm
                (nói lắp) , một tật cần được điều chỉnh càng sớm càng tốt. Làm thế nào để khắc phục? Hãy yêu cầu trẻ thư
                giãn nhiều hơn một chút, chơi nhiều môn thể thao hoặc dành nhiều thời gian hơn cho thể thao, hòa nhập
                với thiên nhiên càng nhiều càng tốt và “ thoát ra khỏi các hoạt động trí não ” nhiều một chút - như vậy
                sẽ tốt hơn cho trẻ.</p>
            <p><em><strong>Hãy luôn nhớ rằng trẻ có Mũi tên Trí tuệ gặp gì cũng phân tích, đánh giá, đo lường.</strong></em> Chúng
                có thể dễ dàng phát hiện người khác không thành thật, cởi mở với chúng, hoặc họ đang muốn lừa dối chúng
                một cách trắng trợn. Chúng sẽ phản ứng bằng cách rút lại toàn bộ niềm tin của mình đối với những người
                này. Nếu sự lừa dối cứ lặp lại nhiều lần, những đứa trẻ này sẽ trở nên vô cùng tức giận. Vì vậy, việc có
                một đứa con có Mũi tên Trí tuệ vừa là niềm vui, niềm hãnh diện, vừa là một nỗi lo lắng của các bậc phụ
                huynh và thầy cô vì không biết chăm sóc sao cho đúng mực để phát huy tối đa năng lực trí tuệ của
                con. <strong><em>Nhưng bạn đừng lo, trái tim của chúng ta rất giỏi. Hãy lắng nghe trái tim mình, bạn sẽ
                    biết bạn nên làm gì và cần làm gì để cho Con bạn một tương lai tốt đẹp nhất.</em></strong></p>
        </div>
    },
    {
        key: 159,
        style: s.arrow159,
        title: ARROW_NAME.DETERMINATION,
        meaning: <div>
            <p><em><strong>Mũi tên Quyết tâm được tạo thành bởi sự có mặt của ba con số 1-5-9 theo đường chéo từ góc
                trái lên góc phải của Biểu đồ ngày sinh.</strong></em>&nbsp;Bất kỳ người nào chào đời vào tháng Năm
                (hoặc Có Số 5 trong ngày sinh) của những năm 19xx đều Có Mũi tên Quyết tâm trong Biểu đồ ngày sinh của
                mình. Đặc biệt, tất cả những người được sinh ra trong những năm 1950 đều có mũi tên này.</p>
            <p>Vì tất cả những người chào đời vào những năm 19xx đều có sẵn “ vốn liếng ” là số 1 và số 9, chỉ cần có
                thêm số 5 là đủ để tạo thành mũi tên. Do đó, Mũi tên Quyết tâm trở thành mũi tên thường gặp nhất trong
                thế kỷ 20. <strong><em>Có lẽ vì vậy nên không có gì đáng ngạc nhiên khi thế kỷ 20 có rất nhiều người có
                    quyết tâm sắt đá và đạt được thành tựu nổi bật. </em></strong>Sang chặng đầu của thế kỷ 21 này, khi
                những người của thế kỷ 20 đang trong lứa tuổi trưởng thành, họ vẫn tiếp tục có những đóng góp quan trọng
                cho xã hội.</p>
            <p>Nếu quan sát kỹ hơn, bạn sẽ thấy quả thật rất nhiều người được sinh ra trong khoảng thời gian 1950 - 1959
                rất thành công cho đến tận bây giờ. Những người có Mũi tên Quyết tâm trong Biểu đồ ngày sinh thường rất
                kiên trì thực hiện bất kỳ điều gì họ muốn làm, vượt qua mọi trở ngại, theo đuổi cho đến khi nào được thì
                thôi. Thật mừng cho những ai có được mũi tên này, bởi nếu thiếu quyết tâm, chúng ta sẽ dễ bị những khó
                khăn trên đường đời làm cho nhụt chí.</p>
            <p><strong><em>Tuy nhiên, những người này cũng nên cẩn trọng vì đôi khi sự quyết tâm quá độ sẽ trở thành sự
                cố chấp khiến họ cứ đâm đầu vào một vấn đề nào đó, dù biết nó không lối thoát hoặc không cần thiết, từ
                đó lãng phí nhiều thời gian và năng lượng, hoặc họ sẽ kiên quyết...</em></strong> ngồi chờ cho đến khi
                nào chướng ngại tan biến, sau đó... lao vào giải quyết tiếp.</p>
            <p><em><strong>Một trong những bài học lớn nhất mà người có Mũi tên Quyết tâm nên thấu hiểu: Không phải vấn
                đề nào cũng cần phải giải quyết. </strong></em>Cái gì cũng lao vào giải quyết thì sẽ rất mệt
                mỏi. <strong><em>Thay vào đó, những người có mũi tên này nên chọn Con đường trung dung, nghĩa là không
                    nên quá cố chấp mà hãy tập phát huy tối đa trực giác, trí tuệ và lòng trắc ẩn của mình, biết lúc nào
                    nên tiếp tục dấn bước, lúc nào nên dừng và lúc nào nên buông. </em></strong>Như vậy họ sẽ giảm thiểu
                được nhiều thời gian, tiết kiệm được nhiều năng lượng, cũng như có cơ hội học hỏi thêm nhiều điều.</p>
            <p>Sự quyết đoán của những người mang Mũi tên 1-5-9 là một phẩm chất tuyệt vời, đồng thời cũng là một ưu
                điểm mạnh mẽ. <strong><em>Nhưng những người có mũi tên này cần học cách sử dụng nó một cách khôn
                    ngoan.</em></strong> Nếu bên cạnh mũi tên này, họ còn có tổ hợp nhiều số 1 trên Biểu đồ ngày sinh
                (từ hai số 1 trở lên , ví dụ : 11 , 111 , 1111... ) thì họ càng phải lưu ý điều này hơn nữa, vì số 1
                càng nhiều thì “ cái tôi ” càng được nhấn mạnh và họ càng dễ trở nên cố chấp đến mức ngang ngạnh.</p>
        </div>
    },
    {
        key: 357,
        style: s.arrow357,
        title: ARROW_NAME.RELIGIOUS,
        meaning: <div>
            <p><em><strong>Nếu trong ngày sinh dương lịch của bạn có đủ ba con số 3, 5, 7, chúng sẽ tạo thành một mũi
                tên khá tốt đẹp, đó là Mũi tên chỉ sự nhạy bén về mặt tâm linh, gọi ngắn gọn là Mũi tên Tâm linh, những
                người có mũi tên này khá “ nhạy ” về các vấn đề tâm linh, trội hơn hẳn một người bình
                thường.</strong></em></p>
            <p>Tuy nhiên, mức độ hiệu quả của mũi tên này khi áp dụng vào cuộc sống cá nhân còn phụ thuộc vào những con
                số khác hoặc những mũi tên khác cùng có mặt trong biểu đồ, và cả Con số chủ đạo của họ nữa. Vậy xét ra,
                những người thuộc nhóm mặc định có Mũi tên Tâm linh có được “ số vốn ” khá mạnh, mặc dù so với nhóm có
                thể chịu nhiều thử thách hơn khi có đến hai số 7 trong ngày sinh - vốn là các “ tín hiệu ” của những bài
                học lớn được học qua sự mất mát và hy sinh.</p>
            <p>Xét về mặt ý nghĩa, Mũi tên 3-5-7 còn lợi hại ở chỗ nó kết nối ba con số mạnh nhất của từng trục: Số 3
                của Trục ngang Trí não, số 5 của Trục ngang Tinh thần và số 7 của Trục ngang Thể chất. Đây còn là những
                con số chủ đạo trong nhiều trường phái tâm linh, thần học hay triết học khác nhau từ Đông sang Tây. Do
                đó, không có gì ngạc nhiên khi liên kết với nhau, chúng tạo ra tiềm năng phi thường để phát triển nhận
                thức tâm linh sâu sắc.</p>
            <p><strong><em>Khả năng nhận thức tâm linh này thường được rút tỉa từ trải nghiệm cá nhân, nên những người
                mang mũi tên này ít khi chịu nghe lời khuyên của người khác. Trong nhiều tình huống, họ thích dấn thân,
                tự trải nghiệm, cảm nhận và tự rút ra bài học cho mình.</em></strong></p>
            <p><strong><em>Hệ quả của khuynh hướng này là họ phải vượt quá nhiều bài học buồn đau trong chặng đầu của
                cuộc đời. Nhưng chính những bài học ấy lại là động lực giúp họ rèn ý chỉ kiên cường để lĩnh hội các
                triết lý sâu sắc của cuộc đời, từ đó trưởng thành. </em></strong>Một khi vượt qua được những trải nghiệm
                cam go đó, có ý thức sống tích cực và nhận ra sức mạnh của tình yêu thương, những người này sẽ hình
                thành một nguồn sức mạnh nội tại khó ai bì được. <strong><em>Để rồi từ đó, họ đạt được sự tĩnh lặng và
                    bình thản, thứ lan tỏa từ tâm hồn của họ ra đến bên ngoài, bộc lộ vẻ đẹp tinh thần của
                    họ.</em></strong></p>
        </div>
    }
]

