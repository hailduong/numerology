import {ReactElement} from 'react'
import s from '../component/BirthChart/BirthChart.module.scss'

export enum BIRTH_DATE_NUMBER_VNM_SUBSECTION {
    ONE = 'MỘT',
    TWO = 'HAI',
    THREE = 'BA',
    FOUR = 'BỐN',
    FIVE = 'NĂM HOẶC NHIỀU HƠN',
    ZERO = 'KHÔNG CÓ'
}

export enum BIRTH_DATE_NUMBER_SUBSECTION {
    ONE = ' số 1',
    TWO = ' số 2',
    THREE = ' số 3',
    FOUR = ' số 4',
    FIVE = ' số 5',
    SIX = ' số 6',
    SEVEN = ' số 7',
    EIGHT = ' số 8',
    NINE = ' số 9',
    // ZERO = ' số 0'
}

type TBirthDateNumberMeaning = {
    [key: number]: {
        [key: number]: {
            title: string
            meaning: string | ReactElement
        }
    }
}

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

export const ARROW_MEANING = [
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

export const BIRTH_DATE_ISOLATE_MEANING: TBirthDateNumberMeaning = {
    1: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.ONE + ' Cô Độc',
            meaning: <div>
                <p>Xung quanh con số 1 của bạn thiếu số 2, số 5, số 4, thì tự nhiên con số 1 của bạn trở thành một “ ốc
                    đảo cô đơn ”.&nbsp;<strong><em>Điều này thể hiện rõ nét vì sao những người có Biểu đồ ngày sinh như
                        thế thường cảm thấy cô độc và không ai hiểu mình.&nbsp;</em></strong>Những người này thường có
                    nhiều con số ở hàng ngang trên cùng hơn (trục Trí não, tức số 3, 6 hoặc 9) , hoặc có hẳn một Mũi tên
                    Hoạt động (7-8-9).</p>
                <p><strong><em>Đối với những trường hợp này, họ rất dễ bị hiểu lầm trong những điều họ nói, những việc
                    họ làm, hoặc thấy khó giải thích được cho rõ, cho đúng những lời nói hay hành động của
                    mình.&nbsp;</em></strong>Nếu các con số còn lại trong biểu đồ của họ nhấn mạnh trục ngang trên cùng
                    những người này có thể bị hiểu lầm là lười biếng hoặc không đáng tin cậy, vì rất nhiều ý tưởng của
                    họ không được hiện thực hóa, hoặc họ hứa nhưng hiếm khi chịu làm. Điều này khiến họ không còn được
                    tin cậy nữa.&nbsp;<strong><em>Nhưng khổ nỗi là trong cuộc sống hằng ngày, những người xung quanh họ
                        đều thấy được điều này, chỉ có bản thân họ thì không! Đó là vì bản chất “ cái tôi ” trong họ quá
                        mạnh mẽ, tạo ra một ốc đảo lẻ loi trong họ.</em></strong></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.ONE + ' Cô Độc',
            meaning: <div>
                <p><strong>Lưu ý:</strong>&nbsp;Càng có nhiều số 1 thì càng trống nhiều số khác trên Biểu đồ ngày sinh.
                    Điều này dễ tạo ra nhiều mũi tên trống (được tạo thành bởi ba số vắng mặt liền nhau trên một trục
                    ngang, dọc hay chéo), và những mũi tên trong đó thường thể hiện một đặc điểm khá bất lợi trong cuộc
                    sống. Những ai ý thức được điều này sẽ tập cho mình hay các con của mình những hoạt động giúp “ điền
                    ” các “ con số ảo ” vào ô trống, để phá các mũi tên trống này, đồng thời tạo ra các mũi tên “ ảo ”
                    để ít nhiều cải thiện cuộc sống của mình.</p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.ONE + ' Cô Độc',
            meaning: <div>
                <p><strong>Lưu ý:</strong>&nbsp;Càng có nhiều số 1 thì càng trống nhiều số khác trên Biểu đồ ngày sinh.
                    Điều này dễ tạo ra nhiều mũi tên trống (được tạo thành bởi ba số vắng mặt liền nhau trên một trục
                    ngang, dọc hay chéo), và những mũi tên trong đó thường thể hiện một đặc điểm khá bất lợi trong cuộc
                    sống. Những ai ý thức được điều này sẽ tập cho mình hay các con của mình những hoạt động giúp “ điền
                    ” các “ con số ảo ” vào ô trống, để phá các mũi tên trống này, đồng thời tạo ra các mũi tên “ ảo ”
                    để ít nhiều cải thiện cuộc sống của mình.</p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.ONE + ' Cô Độc',
            meaning: <div>
                <p><strong>Lưu ý:</strong>&nbsp;Càng có nhiều số 1 thì càng trống nhiều số khác trên Biểu đồ ngày sinh.
                    Điều này dễ tạo ra nhiều mũi tên trống (được tạo thành bởi ba số vắng mặt liền nhau trên một trục
                    ngang, dọc hay chéo), và những mũi tên trong đó thường thể hiện một đặc điểm khá bất lợi trong cuộc
                    sống. Những ai ý thức được điều này sẽ tập cho mình hay các con của mình những hoạt động giúp “ điền
                    ” các “ con số ảo ” vào ô trống, để phá các mũi tên trống này, đồng thời tạo ra các mũi tên “ ảo ”
                    để ít nhiều cải thiện cuộc sống của mình.</p>
            </div>
        },
        5: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.ONE + ' Cô Độc',
            meaning: <div>
                <p><strong>Lưu ý:</strong>&nbsp;Càng có nhiều số 1 thì càng trống nhiều số khác trên Biểu đồ ngày sinh.
                    Điều này dễ tạo ra nhiều mũi tên trống (được tạo thành bởi ba số vắng mặt liền nhau trên một trục
                    ngang, dọc hay chéo), và những mũi tên trong đó thường thể hiện một đặc điểm khá bất lợi trong cuộc
                    sống. Những ai ý thức được điều này sẽ tập cho mình hay các con của mình những hoạt động giúp “ điền
                    ” các “ con số ảo ” vào ô trống, để phá các mũi tên trống này, đồng thời tạo ra các mũi tên “ ảo ”
                    để ít nhiều cải thiện cuộc sống của mình.</p>
            </div>
        },
    },
    3: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.THREE + ' Cô Độc',
            meaning: <div>
                <p><strong><em>Được ví như mỏ neo của trí nhớ, số 3 duy nhất trên Biểu đồ ngày sinh cho thấy người sở
                    hữu nó có trí nhớ rất tốt và lâu dài, miễn là nó được sử dụng thường xuyên </em></strong>(bất kỳ khả
                    năng nào không được mài giũa thường xuyên sẽ dần dần mất đi độ sắc bén). Người có một số 3 trong
                    ngày sinh thường giữ được sự nhanh nhạy trong hoạt động trí não. <strong><em>Những bạn trẻ có một số
                        3 sẽ rất có lợi thế trong việc học tập, cả trong trường học lẫn trường đời.</em></strong> Họ sẽ
                    chủ động quan tâm tới cuộc sống và môi trường xung quanh. Người có một số 3 cũng rất linh hoạt và
                    thường sống khá tích cực. Họ mang năng lượng tích cực này vào hầu hết những công việc mà họ làm. Họ
                    cũng có sự tự tin trên mức trung bình, thứ góp phần không nhỏ vào thành công của họ trong cuộc sống.
                </p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.THREE + ' Cô Độc',
            meaning: <div>
                <p><strong><em>- Vị trí số 3 năm ở một góc (góc trái, trên cùng)</em></strong>, nên nếu trong ngày sinh
                    của một người có một hay nhiều số 3 và thiếu cùng lúc các số 2 , 5 , 6 trên biểu đồ thì cụm số 3 này
                    sẽ nằm có lập trên một “ ốc đảo ” . Đây được gọi là <strong><em>“ Số 3 bị cô lập ”</em></strong> ,
                    thể hiện tiềm năng mạnh mẽ về trí não của người có ngày sinh này bị tản mác vì không được nối với
                    Trục ngang Thể chất (trục số 1-4-7) và sức mạnh trí não không được áp dụng vào thực tế. Càng có
                    nhiều số 3 bị “ nhốt ” trong ốc đảo thì đặc điểm này càng thể hiện rõ. <strong><em>Khi trí tưởng
                        tượng của họ bùng phát theo hướng tiêu cực, những người này hoặc sẽ sa vào thế giới riêng của
                        họ, hoặc sẽ trở thành anh hùng trong trí tưởng tượng riêng của họ.</em></strong></p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.THREE + ' Cô Độc',
            meaning: <div>
                <p><strong><em>- Vị trí số 3 năm ở một góc (góc trái, trên cùng)</em></strong>, nên nếu trong ngày sinh
                    của một người có một hay nhiều số 3 và thiếu cùng lúc các số 2 , 5 , 6 trên biểu đồ thì cụm số 3 này
                    sẽ nằm có lập trên một “ ốc đảo ” . Đây được gọi là <strong><em>“ Số 3 bị cô lập ”</em></strong> ,
                    thể hiện tiềm năng mạnh mẽ về trí não của người có ngày sinh này bị tản mác vì không được nối với
                    Trục ngang Thể chất (trục số 1-4-7) và sức mạnh trí não không được áp dụng vào thực tế. Càng có
                    nhiều số 3 bị “ nhốt ” trong ốc đảo thì đặc điểm này càng thể hiện rõ. <strong><em>Khi trí tưởng
                        tượng của họ bùng phát theo hướng tiêu cực, những người này hoặc sẽ sa vào thế giới riêng của
                        họ, hoặc sẽ trở thành anh hùng trong trí tưởng tượng riêng của họ.</em></strong></p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.THREE + ' Cô Độc',
            meaning: <div>
                <p><strong><em>- Vị trí số 3 năm ở một góc (góc trái, trên cùng)</em></strong>, nên nếu trong ngày sinh
                    của một người có một hay nhiều số 3 và thiếu cùng lúc các số 2 , 5 , 6 trên biểu đồ thì cụm số 3 này
                    sẽ nằm có lập trên một “ ốc đảo ” . Đây được gọi là <strong><em>“ Số 3 bị cô lập ”</em></strong> ,
                    thể hiện tiềm năng mạnh mẽ về trí não của người có ngày sinh này bị tản mác vì không được nối với
                    Trục ngang Thể chất (trục số 1-4-7) và sức mạnh trí não không được áp dụng vào thực tế. Càng có
                    nhiều số 3 bị “ nhốt ” trong ốc đảo thì đặc điểm này càng thể hiện rõ. <strong><em>Khi trí tưởng
                        tượng của họ bùng phát theo hướng tiêu cực, những người này hoặc sẽ sa vào thế giới riêng của
                        họ, hoặc sẽ trở thành anh hùng trong trí tưởng tượng riêng của họ.</em></strong></p>
            </div>
        },
        5: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.THREE + ' Cô Độc',
            meaning: <div>
                <p><strong><em>- Vị trí số 3 năm ở một góc (góc trái, trên cùng)</em></strong>, nên nếu trong ngày sinh
                    của một người có một hay nhiều số 3 và thiếu cùng lúc các số 2 , 5 , 6 trên biểu đồ thì cụm số 3 này
                    sẽ nằm có lập trên một “ ốc đảo ” . Đây được gọi là <strong><em>“ Số 3 bị cô lập ”</em></strong> ,
                    thể hiện tiềm năng mạnh mẽ về trí não của người có ngày sinh này bị tản mác vì không được nối với
                    Trục ngang Thể chất (trục số 1-4-7) và sức mạnh trí não không được áp dụng vào thực tế. Càng có
                    nhiều số 3 bị “ nhốt ” trong ốc đảo thì đặc điểm này càng thể hiện rõ. <strong><em>Khi trí tưởng
                        tượng của họ bùng phát theo hướng tiêu cực, những người này hoặc sẽ sa vào thế giới riêng của
                        họ, hoặc sẽ trở thành anh hùng trong trí tưởng tượng riêng của họ.</em></strong></p>
            </div>
        }
    },
    7: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN + ' Cô Độc',
            meaning: <div>
                <p>Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy
                    sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở
                    vòng đời này. <strong><em>Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” .
                        Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản
                        chất của bài học này chính là “ buông bỏ để đạt được ”.</em></strong></p>
                <p>Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được
                    sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất
                    mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc
                    sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo
                    chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình
                    yêu) với tình yêu vô điều kiện.<strong><em> Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện,
                        chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là
                        nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với
                        biết bao đòi hỏi và kỳ vọng về cảm xúc.</em></strong></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN + ' Cô Độc',
            meaning: <div>
                <p>Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy
                    sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở
                    vòng đời này. <strong><em>Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” .
                        Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản
                        chất của bài học này chính là “ buông bỏ để đạt được ”.</em></strong></p>
                <p>Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được
                    sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất
                    mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc
                    sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo
                    chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình
                    yêu) với tình yêu vô điều kiện.<strong><em> Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện,
                        chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là
                        nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với
                        biết bao đòi hỏi và kỳ vọng về cảm xúc.</em></strong></p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN + ' Cô Độc',
            meaning: <div>
                <p>Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy
                    sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở
                    vòng đời này. <strong><em>Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” .
                        Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản
                        chất của bài học này chính là “ buông bỏ để đạt được ”.</em></strong></p>
                <p>Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được
                    sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất
                    mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc
                    sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo
                    chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình
                    yêu) với tình yêu vô điều kiện.<strong><em> Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện,
                        chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là
                        nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với
                        biết bao đòi hỏi và kỳ vọng về cảm xúc.</em></strong></p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN + ' Cô Độc',
            meaning: <div>
                <p>Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy
                    sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở
                    vòng đời này. <strong><em>Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” .
                        Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản
                        chất của bài học này chính là “ buông bỏ để đạt được ”.</em></strong></p>
                <p>Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được
                    sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất
                    mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc
                    sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo
                    chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình
                    yêu) với tình yêu vô điều kiện.<strong><em> Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện,
                        chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là
                        nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với
                        biết bao đòi hỏi và kỳ vọng về cảm xúc.</em></strong></p>
            </div>
        },
        5: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN + ' Cô Độc',
            meaning: <div>
                <p>Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy
                    sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở
                    vòng đời này. <strong><em>Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” .
                        Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản
                        chất của bài học này chính là “ buông bỏ để đạt được ”.</em></strong></p>
                <p>Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được
                    sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất
                    mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc
                    sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo
                    chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình
                    yêu) với tình yêu vô điều kiện.<strong><em> Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện,
                        chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là
                        nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với
                        biết bao đòi hỏi và kỳ vọng về cảm xúc.</em></strong></p>
            </div>
        }
    },
    9: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.NINE + ' Cô Độc',
            meaning: <div>
                <p>Khi số 9 xuất hiện nhiều trong Biểu đồ ngày sinh có nghĩa là nhiều con số khác sẽ vắng mặt. Và nếu
                    quanh số 9 thiếu những số 5 , 6 và 8, thì người sở hữu biểu đồ này hoặc sẽ có tính lý tưởng thiếu
                    thực tế, hoặc có tham vọng không thể thực hiện, hoặc cả hai yếu tố này cùng lúc. <strong><em>Nếu chỉ
                        có một số 9 bị cô lập, đó là tín hiệu cho thấy tham vọng hoặc hoài bão không được thực
                        hiện.</em></strong></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.NINE + ' Cô Độc',
            meaning: <div>
                <p>Khi số 9 xuất hiện nhiều trong Biểu đồ ngày sinh có nghĩa là nhiều con số khác sẽ vắng mặt. Và nếu
                    quanh số 9 thiếu những số 5 , 6 và 8, thì người sở hữu biểu đồ này hoặc sẽ có tính lý tưởng thiếu
                    thực tế, hoặc có tham vọng không thể thực hiện, hoặc cả hai yếu tố này cùng lúc. <strong><em>Hai
                        số 9 bị cô lập cho thấy lý tưởng thiếu thực tế .</em></strong></p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.NINE + ' Cô Độc',
            meaning: <div>
                <p>Trường hợp có ba số 9 bị cô lập thì có thể cho thấy cả hai yếu tố trên. Với những gì chúng ta
                    đã biết từ cách khắc phục những con số cô lập khác (như số 1, 3, 7), ta có thể “ điền ” các con số
                    ảo vào các ô trống trên biểu đồ bằng cách thực hiện các hoạt động mang yếu tố đặc trưng của các số
                    5, 6 và 8. Trong đó, các hoạt động làm tăng đặc trưng của số 5 là quan trọng nhất nếu Biểu đồ ngày
                    sinh không có số 7, vì số 5 này sẽ nối số 9 với đặc điểm biểu đạt thông qua “ cái tôi ” của số 1,
                    tạo thành trục chéo đầy đặn 1-5-9. Nếu biểu đồ có sẵn số 7, sức mạnh của cả 5 và 8 đều cần được phát
                    triển để kích hoạt tối đa sự liên kết giữa tính lý tưởng và tham vọng của số 9 với Trục ngang Thể
                    chất, vốn gắn liền với tính thực tế. Không có Số 9 Trong Ngày Sinh Điều này không có nghĩa là người
                    này không có trách nhiệm, hoài bão hay lý tưởng. Nó chỉ là sự nhắc nhở rằng các cá nhân đó cần nỗ
                    lực hơn nữa để thể hiện những giá trị này rõ nét hơn, để tạo nên một xã hội hài hòa, luôn tiến về
                    phía trước với sự cân bằng và ổn định.</p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.NINE + ' Cô Độc',
            meaning: <div>
                <p>Trường hợp có bốn số 9 bị cô lập thì có thể cho thấy cả hai yếu tố trên. Với những gì chúng ta
                    đã biết từ cách khắc phục những con số cô lập khác (như số 1, 3, 7), ta có thể “ điền ” các con số
                    ảo vào các ô trống trên biểu đồ bằng cách thực hiện các hoạt động mang yếu tố đặc trưng của các số
                    5, 6 và 8. Trong đó, các hoạt động làm tăng đặc trưng của số 5 là quan trọng nhất nếu Biểu đồ ngày
                    sinh không có số 7, vì số 5 này sẽ nối số 9 với đặc điểm biểu đạt thông qua “ cái tôi ” của số 1,
                    tạo thành trục chéo đầy đặn 1-5-9. Nếu biểu đồ có sẵn số 7, sức mạnh của cả 5 và 8 đều cần được phát
                    triển để kích hoạt tối đa sự liên kết giữa tính lý tưởng và tham vọng của số 9 với Trục ngang Thể
                    chất, vốn gắn liền với tính thực tế. Không có Số 9 Trong Ngày Sinh Điều này không có nghĩa là người
                    này không có trách nhiệm, hoài bão hay lý tưởng. Nó chỉ là sự nhắc nhở rằng các cá nhân đó cần nỗ
                    lực hơn nữa để thể hiện những giá trị này rõ nét hơn, để tạo nên một xã hội hài hòa, luôn tiến về
                    phía trước với sự cân bằng và ổn định.</p>
            </div>
        }
    }
}

export const BIRTH_DATE_NUMBER_MEANING: TBirthDateNumberMeaning = {
    1: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: <div>
                <p><strong><em>Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể
                    hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà
                    là họ khó diễn đạt được cảm xúc nội tâm của mình.</em></strong></p>
                <p>Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá
                    nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm
                    thấy. <strong><em>Chỉ
                        khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu -
                        thì điều này mới
                        được cải thiện. </em></strong>Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy
                    nghĩ thật
                    sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để
                    tự bảo vệ bản
                    thân mình. Điều này khiến vấn đề&nbsp;ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh
                    cãi gay
                    gắt. <em><strong>Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy
                        bằng cách học kiểm
                        soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không
                        thể thu hồi và cảm
                        giác tổn thương rất khó được chữa lành.&nbsp;</strong></em>Để cải thiện hạn chế này, hãy lấy một
                    quyển số trắng
                    và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những
                    suy nghĩ và
                    cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ
                    muốn nói, nhưng
                    rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm
                    hay nói.
                    Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ
                    cơ thể bạn.</p>
                <p><em><strong>Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân
                    được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó
                    trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.</strong></em></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: <div>
                <p><strong><em>Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi
                    sự cân bằng trời cho trong việc diễn đạt nội tâm.</em></strong> Đây là một đặc điểm nên được sử dụng
                    một cách khôn ngoan - <strong><em>không bao giờ lạm dụng nó cho mục đích thao túng người
                        khác</em></strong>. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn có hai
                    số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường
                    có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có
                    khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá
                    trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một
                    chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người
                    khác. <strong><em>Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an
                        vui, bất kể cuộc sống có diễn ra thế nào.</em></strong> Về nhận định này, tôi có hai điều muốn
                    chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này
                    hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.
                </p>
                <p><strong><em>Ví dụ,</em></strong> nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa
                    (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và
                    đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý
                    lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ...&nbsp;<em><strong>Nhưng nhờ sức
                        mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp
                        nhiều thiệt thòi. </strong></em>Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11)
                    nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu
                    thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý
                    nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn
                    thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin&nbsp;” nữa, mà bắt đầu
                    lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi
                    việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp
                    tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.</p>
                <p>Trở lại với những đặc điểm nổi bật của hai số 1 (11) :</p>
                <p><strong><em>Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu
                    đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai
                    số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn
                    đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.</em></strong></p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: <div>
                <p><strong><em>Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra
                    trong thực tế.&nbsp;</em></strong>Khả năng thường gặp nhất là những người này thuộc dạng nói rất
                    nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú
                    vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung
                    quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần
                    (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với
                    người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người
                    thân trong nhà - đó là những lúc họ cảm thấy thoải mái.&nbsp;<strong><em>Những người này thường dễ
                        diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch
                        hơn, không bị cản trở bởi sự nhạy cảm quá&nbsp;mức của họ.</em></strong>&nbsp;Nếu bạn thuộc nhóm
                    này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một
                    cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng,
                    cũng như là một cách để tự chữa lành.&nbsp;<em><strong>Ngoài ra, còn một khả năng nữa ở những người
                        có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn.&nbsp;</strong></em>Tùy
                    theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì
                    được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì
                    ngồi im, không quan tâm tới ai</p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: <div><p><em><strong>Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng
                lời, và vì vậy, rất dễ bị người khác hiểu lầm.&nbsp;</strong></em>Nhưng cuộc sống nhanh chóng dạy họ
                giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên
                trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn.&nbsp;<strong><em>Nói một
                    cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm</em></strong>. Số 1 mang đặc tính
                về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ
                như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân
                mình.<em><strong>&nbsp;Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân,
                    những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình.</strong></em>&nbsp;Khi họ thả lỏng
                hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm
                thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một
                cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.</p></div>
        },
        5: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: <div>
                <p><strong><em>Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các
                    khó khăn trong việc diễn đạt cảm xúc cá nhân. </em></strong>Những người trẻ tuổi thuộc nhóm này
                    thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây
                    gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng
                    như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác
                    nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp.<strong><em> Tính vị kỷ
                        và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc
                        nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ
                        thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ
                        mọi lứa tuổi.</em></strong></p>
            </div>
        }
    },
    2: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p><strong><em>Biểu đồ có một số 2 cho thấy mức độ trực giác Cơ bản, nhưng không phải lúc nào cũng đủ
                    trong thế giới đầy tính cạnh tranh này, đặc biệt là đối với đàn ông.&nbsp;</em></strong>Với các giá
                    trị “ nhân tạo ” trong muôn mặt của xã hội, mỗi cá nhân cần phải tự điều chỉnh, tự khớp mình vào
                    guồng quay chung để có thể cạnh tranh thành công. Và điều này không thể đạt được nếu không có sự
                    nhạy cảm ở mức cân bằng cao độ.&nbsp;<em><strong>Nếu thiếu sự cân bằng này, những người mang bản
                        tính nhạy cảm sẽ dễ bị tổn thương, dẫn đến những phản ứng thiếu khôn ngoan.&nbsp;</strong></em>Nam
                    giới thường bị tình trạng này nhiều hơn nữ giới. Một số 2 trong ngày sinh có thể cung cấp nền tảng
                    giá trị cho việc phát triển tính nhạy cảm cân bằng&nbsp;<em><strong>nhưng lý tưởng nhất vẫn là cặp
                        đôi “ cân bằng ” 22&nbsp;</strong></em>(Có hai số 2 trong biểu đồ).&nbsp;<strong><em>Phái nữ có
                        một số 2 thì vẫn ổn, bởi trời sinh họ đã... đủ nhạy cảm rồi.</em></strong>&nbsp;Nhìn chung,
                    người có một số 2 trong Biểu đồ ngày sinh thường cảm thấy cần nhiều thời gian để thư giãn, ở ngoài
                    thiên nhiên và tránh xa môi trường cạnh tranh căng thẳng. Con số chủ đạo sẽ là chỉ dẫn đáng tin cậy
                    để giúp bạn đạt được điều này.</p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p><strong><em>Cặp số 22 trong Biểu đồ ngày sinh là một lợi thế to lớn để một người phát triển trực giác
                    và độ nhạy cảm. Nhưng người sở hữu cặp số 22 cần có ý thức sử dụng lợi thế này, nếu không nó sẽ bị
                    mai một.</em></strong> Trực giác và độ nhạy cảm lý tưởng này giúp người có cặp số 22 đạt được trí
                    thông minh trên mức trung bình, dựa trên khả năng thấu hiểu trời cho đối với con người và sự việc.
                    Khi nói đến việc đánh giá người khác qua ấn tượng đầu tiên, trực giác của những người này cực đáng
                    tin cậy, với độ chính xác và nhanh chóng đáng kinh ngạc. Họ gần như lập tức nhận ra người khác đối
                    với họ có&nbsp;chân thành hay không, <em><strong>miễn là họ không để “ cái tôi ” hay trí tưởng tượng
                        của mình nhảy vào và làm biến màu trực giác nguyên thủy mà họ có. </strong></em>Nếu được biểu
                    đạt theo cách tích cực, trực giác nhạy bén và cân bằng này sẽ thu hút họ vào nhiều khía cạnh của đời
                    sống con người. Thông thường họ sẽ xử lý những việc này rất suôn sẻ và thành công, nhưng họ cũng cần
                    chú ý để tránh bị lôi kéo vào quá nhiều vụ việc. Điều đó có thể làm tổn hại hạnh phúc gia đình của
                    họ. <strong><em>Cần nhớ rằng cân bằng mới là chìa khóa mở cửa thành công.</em></strong></p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p><strong><em>Một khi “ vượt ngưỡng cân bằng ”, chúng ta sẽ bị quá đà. Người có ba số 2 trong Biểu đồ
                    ngày sinh thường có sự nhạy cảm quá mức, đến mức có thể phát triển thành một dạng gánh nặng tâm lý
                    khó. </em></strong>Những người này rất dễ bị tác động bởi cảm xúc của người khác, từ đó rất dễ bị
                    lún sâu vào vấn đề của người khác.</p>
                <p><em><strong>Để bảo vệ sự nhạy cảm của bản thân, những người này thường dành phần lớn thời gian chìm
                    đắm trong thế giới riêng, do đó có thái độ cách biệt với xã hội và có thể phát triển thành sự cô
                    độc. </strong></em>Nhiều người trong nhóm ba số 2 làm việc trong ngành giải trí sẽ có được thành
                    công vượt trội vì họ có khả năng khắc họa một cách tinh tế tính cách của nhiều nhân vật khác nhau.
                    Tuy nhiên, đôi khi quá nhập tâm nên họ khó thoát ra khỏi vai diễn và khiến bản thân tổn thương. Họ
                    cũng gặp khó khăn trong việc biểu đạt những cảm xúc sâu sắc mà chỉ những người vô cùng nhạy cảm như
                    họ mới có, và dễ tổn thương vì điều này. Do đó, họ thường có phản ứng tự vệ thái quá hoặc cố tình
                    nói những lời làm tổn thương người khác như một cách để bảo vệ bản thân. Trẻ có ba số 2 trong ngày
                    sinh thường rất giỏi bắt chước, và chúng luôn có bản năng muốn chia sẻ những cảm giác của người
                    khác. Tuy nhiên, việc cảm xúc trồi sụt theo những vui buồn của người khác khiến chúng mệt mỏi và mất
                    cân bằng, nên các bậc cha mẹ cần quan sát và hướng dẫn những đứa trẻ này cẩn thận. <strong><em>Nhiệm
                        vụ quan trọng của các bậc cha mẹ là giúp con có được nền tảng vững chắc về sự tự tin, cùng với
                        định hướng đường đời theo Con số chủ đạo của con.</em></strong></p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p><strong><em>Sự nhạy cảm cao độ đến nhường này cần được theo dõi và kiểm soát cẩn thận, nếu không nó
                    rất dễ biến thành những suy diễn sai lầm, đi kèm theo tính nóng giận, thói&nbsp;hay mỉa mai và sân
                    si. </em></strong>Những người này thường vô cùng thiếu kiên nhẫn. <strong><em>Trực giác của họ trở
                    nên kém tin cậy vì họ suy diễn quá nhiều, và họ có khuynh hướng đặt lòng tin nhầm
                    người. </em></strong>Họ thường có nhiều phản ứng thái quá, khá nhẹ dạ và không cân bằng về mặt cảm
                    xúc. Gia đình và bạn bè của những người có bốn số 2 cần cực kỳ kiên nhẫn và thấu hiểu, đặc biệt là
                    khi họ có khá ít bạn bè.</p>
                <p>Theo nghiên cứu và quan sát trong hơn bốn mươi năm của mình, Thầy David cho rằng mặc dù người có bốn
                    số 2 chiếm tỷ lệ rất nhỏ trong tổng dân số, nhưng họ lại thường xuyên góp mặt trong nhóm những người
                    có hôn nhân tan vỡ, phá sản hoặc phải lưu trú trong các viện tâm thần tại Mỹ. Họ hiếm khi leo lên
                    được vị trí cao nơi công sở, nhưng khi đạt được vị thế đó thì họ thường cảm thấy rất khó khăn trong
                    việc khiến người khác tin tưởng. Do đó, khi lên chậm bao nhiêu thì họ lại tụt xuống đáy nhanh bấy
                    nhiêu, trừ khi họ có “ gia đình quyền lực ” với những mối quan hệ đặc dụng. Cuộc sống của những
                    người có bốn số 2 thường rất cô đơn, và nhiều người mượn rượu chè, chất kích thích hoặc các thói gây
                    nghiện khác để khỏa lấp sự trống trải trong tâm hồn. <span><strong><em>Họ có thể tránh được sự xa cách về mặt cảm xúc này nếu chịu mở lòng đón nhận những lời khuyên phù hợp và khôn ngoan. Họ cần phải học cách tự kiểm soát bản thân thật chặt chẽ khi có điều gì liên quan đến bày tỏ cảm xúc, học cách thư giãn và thiền mỗi khi có thể, cũng như xuôi theo dòng chảy của cuộc sống thay vì cứ đi ngược lại nó.</em></strong></span>
                </p>
            </div>
        },
        5: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p><strong><em>Đây là trường hợp cực kỳ hiếm. Những người có ngày sinh mang năm số 2 rất dễ phản ứng với
                    sự nhạy cảm đặc biệt của mình. Họ rất cần sự quan tâm và hướng dẫn cực kỳ tập trung, tận tâm từ cha
                    mẹ, thầy cô, đặc biệt khi họ còn rất nhỏ, và họ thường thử thách lòng kiên nhẫn của những người khác
                    tới tận cùng.</em></strong></p>
                <p><strong>Lưu ý:</strong> Trong những thập niên tới đây, chúng ta sẽ có dịp nhìn thấy những biểu đồ
                    ngày sinh có sáu số 2, như trong ngày sinh của người sinh ra vào 22/2/2022; hoặc thậm chí là bảy số
                    2, như trong ngày sinh 22/2/2222 và 22/12/2222. <strong><em>Các bậc phụ huynh có con sinh vào những
                        ngày này cần đặc biệt lưu ý để dìu dắt và kiên nhẫn với con ngay từ khi rất nhỏ, để hỗ trợ Con
                        trong việc bày tỏ cảm xúc. </em></strong>Nhiều số 2 được lặp lại đồng nghĩa với việc Biểu đồ
                    ngày sinh bị trống nhiều con số ở những vị trí khác. Điều này tạo thành những Mũi tên trống, cho
                    thấy một số đặc điểm tương đối bất lợi cho người mang nhiều số 2. <em><strong>Tuy nhiên, hãy nhớ
                        rằng những gì được thể hiện trên Biểu đồ ngày sinh chỉ mới là “ số vốn ban đầu ” của mỗi người
                        khi vào đời. Khi nhận thức rõ điều này, chúng ta sẽ có cơ hội và khả năng điều chỉnh bản thân,
                        từ đó tác động đến cuộc đời mình, bằng cách phát triển một số kỹ năng, </strong></em>tham gia
                    các hoạt động mang tính chất của những con số không có mặt trên biểu đồ, đặc biệt là con số nằm ở vị
                    trí trung tâm như số 5, hay các số nằm giữa các trục ngang, trục dọc khác.</p>
            </div>
        }
    },
    3: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p><strong><em>Được ví như mỏ neo của trí nhớ, số 3 duy nhất trên Biểu đồ ngày sinh cho thấy người sở
                    hữu nó có trí nhớ rất tốt và lâu dài, miễn là nó được sử dụng thường xuyên </em></strong>(bất kỳ khả
                    năng nào không được mài giũa thường xuyên sẽ dần dần mất đi độ sắc bén). Người có một số 3 trong
                    ngày sinh thường giữ được sự nhanh nhạy trong hoạt động trí não. <strong><em>Những bạn trẻ có một số
                        3 sẽ rất có lợi thế trong việc học tập, cả trong trường học lẫn trường đời.</em></strong> Họ sẽ
                    chủ động quan tâm tới cuộc sống và môi trường xung quanh. Người có một số 3 cũng rất linh hoạt và
                    thường sống khá tích cực. Họ mang năng lượng tích cực này vào hầu hết những công việc mà họ làm. Họ
                    cũng có sự tự tin trên mức trung bình, thứ góp phần không nhỏ vào thành công của họ trong cuộc sống.
                </p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p><strong><em>Nhân đôi độ nhạy về phần trí não, người có hai số 3 trong Biểu đồ ngày sinh thường giàu
                    trí tưởng tượng và có khả năng văn chương.</em></strong> Tuy nhiên, những thế mạnh này cần được theo
                    dõi chặt chẽ để có thể phát triển theo hướng tích cực và cân bằng nhất, tránh khả năng đi theo hướng
                    tiêu cực vì sẽ dễ phát sinh những hành vi phản xã hội (có hành vì phản kháng xã hội hoặc từ chối
                    giao lưu / giao tiếp) . <strong><em>Để hỗ trợ rèn luyện tinh thần kỷ luật bản thân, người có hai số
                        3 nên thực hành thiền tĩnh tâm mỗi khi có thể cùng với những bài tập luyện trí nhớ và phát triển
                        trực giác. </em></strong>Những hoạt động này có thể giúp “kéo” họ về với thực tế, với những ý
                    tưởng mang tính xây dựng và tích cực hơn. Nếu không, trí tưởng tượng quá phong phú của họ sẽ làm
                    hỏng cái nhìn khách quan hay sự hiểu biết toàn diện. <em><strong>Khi nuông chiều&nbsp;trí tưởng
                        tượng và suy diễn của mình, họ có thể từ từ mất luôn tính thực tế. </strong></em>Người có hai
                    hay ba số 3 trong Biểu đồ ngày sinh thường có khả năng viết lách đáng nể. Nếu được khích lệ, họ có
                    khả năng viết rất mạch lạc, khai thác được nhiều nguồn cảm hứng dồi dào và hoàn toàn có khả năng
                    biến kỹ năng này thành một công việc có thu nhập đáng kể.</p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p><strong><em>Ba số 3 đưa mức độ nhạy của tâm trí chạy quá xa về phía tưởng tượng, khiến những người sở
                    hữu chúng thường mất liên kết với thực tế, từ đó gây ra sự cách biệt, thứ có nguy cơ kéo theo sự cô
                    đơn.</em></strong> Họ tự tạo ra một “ thực tế ” của riêng mình, nhưng thật đáng tiếc là không ai
                    khác có thể nhìn thực tế theo cách họ nhìn, vì vậy đơn độc lại càng thêm đơn độc.<strong><em> Trí
                        tưởng tượng phong phú của họ thường tập trung vào những sự kiện chưa xảy ra và tạo ra những cảnh
                        tượng lạ lùng đến mức họ thường khó tập trung vào hiện tại và kết nối với những người xung
                        quanh. </em></strong>Với sự mất cân bằng như vậy, những người này thường cảm thấy khó tin tưởng
                    người khác, hiếm khi được thư giãn và có thể nghiện một số loại thuốc chống căng thẳng.</p>
                <p>Họ khó có bạn thân và hầu như không cảm thấy hạnh phúc. Đôi khi họ quá đắm chìm trong những cuộc viễn
                    du trong tâm tưởng đến nỗi quên mất hiện tại, xao lãng luôn người đang nói chuyện với mình. Sự tập
                    trung mất cân bằng như vậy không giúp ích gì cho họ trong việc nhìn nhận sự việc một cách chân thực.
                    Càng như vậy, họ càng thu mình vào trong vỏ ốc nội tâm, và điều này lại khiến họ càng thêm mất lòng
                    tin nơi người khác, gây ra nhiều sự mâu thuẫn và tranh cãi. Nếu Có người thân thuộc nhóm này, bạn
                    cần hết sức kiên nhẫn, thấu hiểu và quan tâm, yêu thương, định hướng thận trọng. <span><em><strong>Cách tốt nhất để hỗ trợ họ là hãy khuyến khích họ chú ý vào thực tại. Họ cần được dạy tính thực tế thông qua những hoạt động sử dụng sự khéo léo của đôi tay và nhận diện cảm xúc từ trái tim, thường là qua các hoạt động hay hình thức mang tính nghệ thuật. Sự kiên nhẫn và cảm thông từ người hướng dẫn là cực kỳ quan trọng.</strong></em></span>
                </p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div><p>Trường hợp hiếm này chỉ có thể xảy ra vào một tháng duy nhất ở mỗi thế kỷ. Ở thế kỷ 20,
                trường hợp cuối cùng là vào ngày 31/3/1933, nghĩa là người này nếu còn sống thì cũng khá lớn tuổi rồi.
                Còn ở thế kỷ 21, mãi tới ngày 3/3/2033 mới có Biểu đồ ngày sinh gồm bốn số 3. Vậy nên tôi sẽ không bàn
                nhiều về trường hợp này. Chúng ta chỉ cần hiểu rằng càng nhiều số 3 trong biểu đồ thì mức độ tưởng tượng
                càng đậm, vì vậy, khó khăn càng dày.</p></div>
        }
    },
    4: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
            meaning: <div>
                <p><strong><em>Người có một số 4 trong Biểu đồ ngày sinh là những người rất chủ động, làm việc gì cũng
                    hăng hái và thực tế, bao gồm các hoạt động liên quan đến lĩnh vực tổ chức, kỹ thuật, tài chính hoặc
                    hoạt động thể chất như làm vườn, các hình thức nghệ thuật tạo hình từ đôi tay, xây
                    dựng,... </em></strong>Hoạt động mà họ lựa chọn theo đuổi và có khả năng thành thạo nhất thường được
                    thể hiện qua con số chủ đạo. Ví dụ, tôi có Con số chủ đạo là 9, trong đó có định hướng ngành nghề
                    phù hợp là “ không giỏi tính toán, đừng làm ăn kinh doanh vì không giỏi tài chính ”. Đồng thời tôi
                    cũng có một số 4 trong Biểu đồ ngày sinh, trong đó có yếu tố khá tài chính.&nbsp;&nbsp;So sánh sức
                    ảnh hưởng của hai bên thì con số chủ đạo có ảnh hưởng lớn hơn, nên yếu tố “ không giỏi tài chính ”
                    vẫn trội hơn, nhưng nhờ có được một số 4 nên vẫn có thể lên ý tưởng, làm nội dung, định hướng cho
                    kinh doanh, miễn là đừng tham gia vào các hoạt động sổ sách, kế toán là được.</p>
                <p><strong><em>Những người có một số 4 sẽ thích bắt tay vào việc thực tế hơn là ngồi nghiền ngẫm lý
                    thuyết suông, và đặc biệt, họ thường hoài nghi, không tin vào những điều có vẻ quá mơ hồ, trừu
                    tượng. </em></strong>Họ thích thực tế hơn lý thuyết và dễ mất kiên nhẫn với những ai hẹn lần hẹn lữa
                    hay cứ dời hạn đã hẹn. Họ thích xúc tiến công việc ngay lập tức, và điều này gần như trở thành quy
                    tắc “ bất di bất dịch ” đối với họ, đặc biệt là khi họ có thêm một số 7 nữa trong ngày
                    sinh. <strong><em>Nếu quan tâm quá nhiều đến khía cạnh vật chất, những người có một số 4 thường có
                        xu hướng thực dụng.</em></strong> Điều này có thể là một khía cạnh tiêu cực của số 4 nói chung,
                    mục đích là để dạy cho những người sở hữu Con số này biết vận dụng lòng kiên nhẫn vốn có của mình để
                    tránh chạy theo chủ nghĩa vật chất. Cách tốt nhất để làm được điều đó là học cách nhẫn nại và quan
                    tâm đến những người xung quanh nhiều hơn. <strong><em>Nói cách khác, càng quan tâm và thương yêu
                        người khác nhiều thì từ từ bạn sẽ càng không còn màng đến những giá trị vật chất quanh mình nữa.
                        Và bằng cách này, bạn sẽ đạt được tình bạn và hạnh phúc lâu dài.</em></strong></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
            meaning: <div>
                <p><em><strong>Nhân đôi số 4 có thể dẫn tới cái nhìn không cân bằng về cuộc sống, mà trong đó mọi thứ
                    đều được quy về giá trị thực tế và vật chất. Vậy điều mà người có hai số 4 cần học là cách cân bằng
                    giữa ba khía cạnh: thể chất / vật chất, tinh thần và trí não. Như vậy họ sẽ sống thoải mái, hài hòa
                    hơn với cảm xúc và tư duy của chính mình.</strong></em></p>
                <p>Nếu những người này có con số chủ đạo thuộc Trục ngang Tinh thần (số 2 , 5 , 8) hoặc Trục ngang Trí
                    não (số 3 , 6 , 9) , thì họ có khả năng bẩm sinh trong lĩnh vực tinh thần hay trí não cao hơn những
                    người cũng thuộc nhóm này nhưng có con số chủ đạo thuộc Trục ngang Thể chất (các số 4,7). Nói chung,
                    càng có nhiều số 4 trong Biểu đồ ngày sinh thì chúng ta càng cần phải học cách cân đối ba lĩnh vực
                    nói trên, và khi chọn bạn bè, cần phải lưu ý tránh xa những người có khả năng tác động tiêu cực đến
                    mình. Ngược lại, nếu chọn được những người bạn biết trân trọng giá trị thẩm mỹ, văn hóa, đạo đức,
                    thì cuộc đời chúng ta cũng sẽ cân bằng theo hướng tốt đẹp.</p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
            meaning: <div><p><strong><em>Tất cả những đặc điểm của hai số 4 đều được thể hiện trong Biểu đồ ba số 4,
                nhưng với cấp độ mãnh liệt hơn, vì những người sở hữu biểu đồ này bị cột chặt vào những giá trị vật
                chất, đến mức mỗi khi họ có ý thức muốn thoát ra để hướng tới những giá trị cao hơn thì họ lại dễ bị các
                giá trị vật chất lôi kéo trở lại.</em></strong> Những người nhận thức được sức hút này của chủ nghĩa vật
                chất phải có ý chí mạnh mẽ và thái độ sẵn sàng tiếp nhận sự chỉ dẫn tận tình thì mới có thể phát triển
                thêm về mặt trí não, tinh thần hoặc tâm linh. Nhiều người có ba số 4 thường lao vào kiếm tiền đến mức
                kiệt quệ mà không nhận ra bài học của họ là kiểm soát công việc để hiểu những giá trị mà công việc đó
                mang đến, chứ không phải vùi đầu làm tôi tớ cho nó. Khi nhận ra điều này và có ý thức thoát khỏi nó, họ
                sẽ có khả năng cân bằng hơn ở ba khía cạnh thể chất - tinh thần - trí não. Bên cạnh đó, Thầy David, còn
                thấy rằng những người có ba số 4 có khuynh hướng bị yếu hai chân, do họ thường đặt quá nhiều trọng tâm
                lên phần chi dưới. Họ cần quan tâm đặc biệt đến đầu gối, cổ chân và bàn chân.</p></div>
        },
        // 4: {
        //     title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
        //     meaning: <div></div>
        // },
        // 5: {
        //     title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
        //     meaning: <div></div>
        // }
    },
    5: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: <div>
                <p><strong><em>Người có một số 5 trong Biểu đồ ngày sinh sẽ có cơ hội tốt nhất để đạt được tính cách cân
                    bằng. </em></strong>Đây cũng là con số duy nhất đảm bảo tất cả các con số nằm ở bốn góc biểu đồ
                    (1,3,7,9) không bị rơi vào thế “ Con số bị cô lập ”. <strong><em>Đặc biệt, một số 5 sẽ hỗ trợ rất
                        tốt cho việc kiểm soát cảm xúc, vì nó đảm bảo sự nhạy cảm với cuộc sống được phát triển thành
                        một chỉ dẫn trực giác đáng tin cậy.</em></strong> Điều này giúp những người sở hữu một số 5 xuất
                    sắc trong việc chọn lựa những hành động phù hợp với tình huống chứ không phản ứng một cách thiếu suy
                    nghĩ. Có vai trò như một hàng rào bảo vệ đầy giá trị cho sự nhạy cảm của con người, một số 5 trong
                    biểu đồ sẽ củng có tính can trường và lòng trắc ẩn, qua đó tạo nên một người đầy nghị lực. Nó cũng
                    mang lại sức mạnh của lòng trắc ẩn và sự tự do để thúc đẩy các giá trị của tất cả những hình thức
                    biểu đạt khác. Số 5 duy nhất trong biểu đồ cũng hỗ trợ người sở hữu nó thấu hiểu những cảm xúc của
                    bản thân, và từ đó giúp họ có khả năng tôn trọng cảm nhận của người khác.</p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: <div>
                <p><strong><em>Người có hai số 5 trong Biểu đồ ngày sinh thường có lòng quyết tâm mãnh liệt, được thể
                    hiện qua ánh mắt mạnh mẽ và đôi lông mày hay nhíu lại. </em></strong>Quyết tâm sắt đá này mang đến
                    cho họ dáng vẻ rất tự tin và kiên định, mà đôi khi chỉ là bề ngoài hơn là thực tế. Khi họ trưởng
                    thành, sự tự tin này thường chỉ còn là thứ mà chúng ta hay gọi là “ làm oai ”, chứ không phải là sự
                    tự tin thật sự. Đồng thời họ cũng gặp phải nhiều khó khăn trong việc xử lý những vấn đề quá nặng về
                    tình cảm, cảm xúc trong gia đình hoặc nơi công sở. Họ cần chú ý để không nghiêm trọng hóa các vấn đề
                    này và giữ cho mọi việc nhẹ nhàng như nó vốn dĩ như vậy.</p>
                <p><em><strong>Đôi khi sự mãnh liệt và nhiệt tình ở những người có hai số 5 trở nên thái quá&nbsp;đến
                    mức không thể chịu đựng được và gây ra những sự hiểu lầm khiến những người thân cận với họ cảm thấy
                    phiền hà và điên tiết. </strong></em>Sự nghiêm trọng quá mức trong thái độ hay lời nói của họ có thể
                    lên đến mức tạo ra những hỗn loạn về cảm xúc trong môi trường họ sống, từ đó gây ra các vấn đề sức
                    khỏe có liên quan đến vùng bụng và dạ dày, như chứng khó tiêu hoặc loét dạ dày. Những người có hai
                    số 5 cần chú ý kiểm soát cảm xúc, nếu không họ dễ sa đà vào các chất hay thói quen gây nghiện để
                    giải tỏa năng lượng cảm xúc bị dồn nén của mình.</p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: <div><p><em><strong>Những đặc điểm của hai số 5 sẽ thể hiện mạnh mẽ hơn khi một người có đến ba số
                5 trong Biểu đồ ngày sinh. Những cảm xúc mãnh liệt đến mức gây căng thẳng như vậy rất khó để dung
                hòa. </strong></em>May mà rất hiếm người có ngày sinh rơi vào trường hợp này. Các bậc cha mẹ cần dạy con
                từ rất sớm để trang bị cho con khả năng tự kỷ luật. Đây là trách nhiệm rất quan trọng của những bậc phụ
                huynh này, những người hiếm khi được chuẩn bị tinh thần cho trọng trách này và thường cảm thấy không thể
                hiểu nổi đứa con “ phức tạp ” của mình. Các bậc cha mẹ cũng đừng tuyệt vọng, vì tình yêu thương và sự
                thấu hiểu của họ sẽ đem lại giá trị lớn lao và giúp các con phát triển đúng mực.</p>
                <p><strong><em>Với trường hợp này, cả cha mẹ và con cái đều phải cẩn trọng suy nghĩ trước khi nói hoặc
                    hành động, để tạo điều kiện cho sức mạnh trí tuệ được phát huy và giảm thiểu nguy cơ vô tình làm tổn
                    thương sự nhạy cảm của một người “ mãnh liệt ” như vậy. </em></strong>Nếu làm được điều này thì các
                    con của họ sẽ không cần dựng lên một “ hàng rào ” bảo vệ sự nhạy cảm của chính mình. Điều này sẽ
                    giúp bảo đảm đời sống xã hội và hạnh phúc của con trẻ.</p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: <div>
                <p><em><strong>Con số này rất hiếm gặp. Người sở hữu cụm số này thường bị căng thẳng dữ dội, khiến cho
                    họ dễ gặp các vấn đề về sức khỏe có liên quan đến vùng bụng và dạ dày. </strong></em>Những người này
                    cũng dễ gặp tai nạn và thường ở trong trạng thái căng thẳng cao độ. Cuộc sống thường tạo ra các “
                    tai nạn ” để khiến chúng ta chậm bước lại hoặc quay đầu, nếu chúng ta có lỡ lạc khỏi con đường tiến
                    hóa của mình. Nhưng nếu không biết tự xem xét tình huống của mình, chúng ta sẽ có nguy cơ gặp thêm
                    nhiều “ tai nạn ” khác trên hành trình của mình. Đây là điều rất dễ xảy ra với người có bốn số 5
                    trong Biểu đồ. <strong><em>Những người này cũng thường cảm thấy cuộc sống rất khó hiểu, nếu họ không
                        chịu tiếp nhận những sự hướng dẫn khôn ngoan để giúp định hướng cho bản thân mình.</em></strong>
                </p>
            </div>
        },
        // 5: {
        //     title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
        //     meaning: <div></div>
        // }
    },
    6: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: <div>
                <p><em><strong>Số 6 chỉ óc sáng tạo, và biểu hiện phổ biến nhất của những người mang đặc tính này của số
                    6 chính là tình yêu sâu đậm với mái ấm của mình.</strong></em> Tuy nhiên, khi thể hiện ở mức độ cá
                    nhân, họ thường chọn những lĩnh vực nghệ thuật, như sáng tác, biểu diễn, vẽ tranh, làm gốm... Người
                    có một số 6 rất tập trung vào trách nhiệm với gia đình. Nhưng khi trưởng thành hơn, những người này
                    cảm thấy chỉ trách nhiệm với gia đình thôi là chưa đủ để thể hiện tính sáng tạo của mình, do đó họ
                    sẽ tham gia vào nhiều lĩnh vực khác để thỏa mãn bản thân - hoặc họ sẽ tiếp tục thắc mắc tại sao mình
                    vẫn chưa có được cảm giác mãn nguyện trong những việc mình làm. Khi họ “ phát hiện ” ra các thể loại
                    nghệ thuật phù hợp, đặc biệt là sức mạnh sáng tạo của âm nhạc, cuộc sống của họ sẽ thăng hoa một
                    cách đáng kinh ngạc.</p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: <div>
                <p><strong><em>Có hai số 6 trong Biểu đồ ngày sinh có thể trở thành một thử thách vĩ đại hoặc một gánh
                    nặng vô cùng to lớn. </em></strong>Mỗi cá nhân sẽ có cách ứng phó khác nhau với tình trạng này, tùy
                    vào con số chủ đạo và nhiều yếu tố khác như môi trường sống, đặc biệt là ảnh hưởng của cha mẹ trong
                    giai đoạn đầu đời. <strong><em>Mặt tiêu cực của hai số 6 thể hiện khá rõ nét và kéo dài đối với
                        những người có nhận thức kém hơn</em></strong>. Điều này gây ra sự lo lắng, bồn chồn, căng thẳng
                    và dễ nóng giận, đặc biệt là ở nhà và nơi công sở. Những người thân cận với họ sẽ cảm nhận sự tiêu
                    cực này rõ nhất; và đối với tất cả những người có liên quan, sự tiêu cực này có thể gây ra tình
                    trạng rối loạn vì căng thẳng, thậm chí có thể dẫn đến bệnh tật.</p>
                <p><strong><em>Cách hóa giải tốt nhất là mở rộng mối quan tâm của họ ra ngoài phạm vi gia đình để vươn
                    tới những lĩnh vực sáng tạo đa dạng hơn.</em></strong> Nghề nghiệp của những người có hai số 6 trong
                    ngày sinh nên hướng về những ngành chú trọng tính sáng tạo, được truyền cảm hứng bởi sự tự tin và
                    thấu hiểu sâu sắc về một vấn đề nào đó. Họ cần được hướng dẫn nhẹ nhàng - đừng bao giờ hối thúc hay
                    đe dọa họ. Đối với những người này, tình yêu và sự tôn trọng là vô cùng quan trọng, có chức năng như
                    “ dầu cù là giúp xoa dịu hệ thống thần kinh nhạy cảm của họ. <strong><em>Những người này cần thư
                        giãn nhiều hơn những nhóm khác, bởi họ tiêu hao rất nhiều năng lượng trí não vào những hoạt động
                        sáng tạo hoặc hoạt động thường ngày. Họ cần tập tĩnh tâm, hoặc thiền càng tốt, trước khi đi ngủ
                        để đảm bảo sự thư giãn hoàn toàn. Họ cũng cần những giấc ngủ trưa mỗi khi có thể.</em></strong>
                </p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: <div><p><strong><em>Người có ba số 6 trong Biểu đồ ngày sinh càng nhân thêm sự căng thẳng thần kinh
                trong mọi việc, đặc biệt là trong chuyện gia đình. Phụ nữ chịu tác động bởi điều này nhiều hơn, vì mối
                quan tâm hàng đầu của những người phụ nữ có ba số 6 thường là vấn đề gia đình.</em></strong>
                <em><strong>Một trong những hậu quả của điều này chính là họ thường bảo vệ các con quá mức, có thái độ
                    sở hữu đối với những người mà họ yêu thương.</strong></em></p>
                <p>Vấn đề thường gặp đối với những người thuộc nhóm này chính là họ hiếm khi nhận ra tiềm năng sáng tạo
                    rất tích cực trong cuộc sống gia đình. Thay vào đó, họ thường tự làm khổ mình bởi các mối bận tâm,
                    và điều này trở thành những cơn lốc cảm xúc lệch lạc. Bảo vệ con cái quá mức chính là biểu hiện của
                    tình trạng này. Họ thường cảm thấy sợ hãi viễn cảnh con cái lớn khôn và rời khỏi vòng tay mình, do
                    đó họ bắt đầu có những hành động sở hữu kém lành mạnh mà cuối cùng sẽ khiến các con của họ cảm thấy
                    bị trói buộc, để rồi chúng sẽ muốn rời xa họ sớm hơn.</p>
                <p><em><strong>Những người này cần chú trọng quan tâm bản thân để có được sự cân bằng trong cuộc sống.
                    Nghỉ ngơi, thư giãn đúng mực, tìm sự giải khuây và thú vui trong các hoạt động sáng tạo ở bất kỳ
                    hình thức nào cũng là những giải pháp tốt để đạt được điều này.</strong></em></p></div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: <div>
                <p>Người có bốn số 6 cực kỳ hiếm, xuất hiện chỉ ba lần trong một thế kỷ. Trong thế kỷ 20, ngày sinh cuối
                    cùng có bốn số 6 là ngày 26/6/1966, và may mắn ngày sinh này có các số 1 , 2 và 9 giúp giảm bớt sự
                    căng thẳng của nhiều số 6 lặp lại. <em><strong>Bốn số 6 thể hiện tiềm năng sáng tạo vượt trội. Mặt
                        khác, các khía cạnh tiêu cực, vốn bị chi phối nặng nề bởi cảm xúc, cũng luôn chực chờ để thao
                        túng những người có bốn số 6 trong biểu đồ</strong></em>. Chính vì vậy, những người này dễ bị lo
                    âu sầu khổ, làm tổn hại đến sức khỏe của họ và các mối quan hệ bạn bè và những lời phàn nàn không
                    ngớt. Nếu cha mẹ nhìn ra đặc điểm này của đứa trẻ có bốn số 6 ngay từ nhỏ và kiên nhẫn hướng dẫn trẻ
                    phát huy tiềm năng sáng tạo, thì trẻ sẽ không bị chi phối bởi những đặc điểm tiêu cực của bốn số
                    6.<em><strong> Khi được đối xử bằng tình yêu thương vô điều kiện, những người sở hữu bốn số 6 sẽ dễ
                        dàng tìm được cách tích cực để thể hiện tài năng của mình ở các hoạt động sáng
                        tạo.</strong></em></p>
                <p><strong><em>Tóm lại, những người có số 6 trong ngày sinh sẽ luôn có thiên hướng sáng tạo. Chúng ta
                    càng sớm ý thức được điều này và tập trung mài giũa nó thì càng dễ tránh được những khía cạnh tiêu
                    cực như đã đề cập ở trên</em></strong>. Khi đó, năng lượng của bốn số 6 được giải phóng một cách
                    tích cực và sẽ thăng hoa, giúp người sở hữu nó gặt hái được nhiều thành quả tốt đẹp.</p>
            </div>
        },
        // 5: {
        //     title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
        //     meaning: <div>
        //     </div>
        // }
    },
    7: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: <div>
                <p>Sự hy sinh của bạn sẽ thuộc một trong ba lĩnh vực sau đây : sức khỏe, tiền tài hoặc tình yêu. Sự hy
                    sinh này đã hoặc sẽ xuất hiện trong cuộc đời bạn như một phần thiết yếu trong tiến trình học hỏi ở
                    vòng đời này. <strong><em>Những đau thương, hy sinh này là một phần để tâm hồn bạn chịu “ hé mở ” .
                        Nhưng thông thường, những người chịu tổn thất, hy sinh này lại than vãn mà không nhận ra bản
                        chất của bài học này chính là “ buông bỏ để đạt được ”.</em></strong></p>
                <p>Khi không đánh đồng bản thân với giá trị của những của cải vật chất mà mình sở hữu, chúng ta học được
                    sự khác biệt giữa “ sở thích ” và “ nỗi ám ảnh sở hữu ”. Về mặt sức khỏe và tình yêu, bất kỳ sự mất
                    mát nào về mặt này đều giúp chúng ta trui rèn và thanh lọc thái độ cũng như các thói quen trong cuộc
                    sống. Nếu muốn hoàn thành mục đích sống của mình khi đến với Trái đất này, chúng ta phải đảm bảo
                    chăm sóc tốt sức khỏe của mình. Trong tình yêu, ta thường hay nhầm lẫn sự thèm muốn (có được tình
                    yêu) với tình yêu vô điều kiện.<strong><em> Hãy nhớ rằng, nếu thực hành yêu thương vô điều kiện,
                        chúng ta không bao giờ mất mát gì cả, bởi vốn dĩ ta không có mong cầu gì. Tuy nhiên, thực tế là
                        nhiều người trong chúng ta hiếm khi duy trì được tình yêu dài lâu vì cứ gắn kèm “ tình yêu ” với
                        biết bao đòi hỏi và kỳ vọng về cảm xúc.</em></strong></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: <div>
                <p>Hai số 7 trong Biểu đồ ngày sinh nhấn mạnh gấp đôi mức độ của “ bài học ” trong cuộc đời. Những người
                    có hai số 7 sẽ thấy những bài học thương đau trong cuộc đời họ xuất hiện ở hai trong số ba khía cạnh
                    cơ bản của đời sống: sức khỏe, tình cảm, hoặc tiền tài. <strong><em>Trải nghiệm này có mục đích nhắc
                        nhở họ thấu hiểu ý nghĩa mang tính triết lý của cuộc đời ở mức độ sâu sắc hơn. Điều này thường
                        kích thích sự quan tâm của họ đối với các vấn đề thuộc phạm trù siêu hình học, từ đó khơi dậy
                        năng lực chữa lành, khả năng hướng dẫn và lòng trắc ẩn trong họ.</em></strong></p>
                <p>Nếu không nhận ra những giá trị sâu xa này, người có hai số 7 sẽ dễ rơi vào trạng thái sống tiêu cực
                    và không ngừng than vãn về những mất mát đau thương mà họ gặp phải, trách móc mọi người về các vấn
                    đề của họ và lên án cuộc đời bất công. Họ sẽ trở thành những người cọc cằn, xấu tính mà hầu như ai
                    cũng muốn tránh tiếp xúc.</p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: <div><p>Người có ba số 7 trong Biểu đồ ngày sinh có vẻ là những người có số phận đáng buồn vì gặp
                phải những mất mát nặng nề trong cả ba khía cạnh của đời sống: sức khỏe, tình cảm hoặc tiền tài. Nhưng
                đó lại thường là cảm nhận của những người thân thiết với họ, chứ không phải là cảm nhận của bản thân họ
                - người gánh chịu những tổn thất này - vì sau khi trải qua quá nhiều bài học thương đau, họ đã có sự
                thấu hiểu sâu sắc và nhận ra mục đích mà “ đời ” đang kiên trì “ dạy họ. <em><strong>Những mất mát này
                    chính là bài kiểm tra tính can trường và lòng trắc ẩn, mà những ai vượt qua được sẽ trở nên vô cùng
                    mạnh mẽ. Những người này có giá trị và quan điểm về cuộc sống phát triển vượt qua giới hạn trí tuệ
                    thông thường. </strong></em>Họ là vốn quý của gia đình và xã hội, là chỗ dựa đáng tin cậy để mọi
                người có thể tìm đến nương tựa hoặc xin chỉ dẫn. Nhưng đó là với những ai vượt qua được những thử thách
                ngặt nghèo của cuộc sống. Còn đối với những người có ba số 7 không thể lội qua vùng lầy này, họ sẽ cảm
                thấy mất tất cả, héo hon trong vũng bùn cuộc đời và dựa vào lòng thương cảm của người khác để níu kéo sự
                tồn tại của mình. Họ rất dễ trầm cảm và có những hành vi phản xã hội khiến bạn bè rời xa, gia đình né
                tránh.</p></div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: <div><p>Với cả bản thân đứa trẻ lẫn cha mẹ của những đứa trẻ có bốn số 7, sự hỗ trợ tận tình trong
                đời sống thực tế và tinh thần là thiết yếu, vì nếu không, cả cha mẹ lẫn đứa trẻ đều sẽ gục ngã dưới gánh
                nặng mà những tổ hợp những mất mát mang lại. <em><strong>Nhưng một lần nữa , cần phải nhấn mạnh rằng
                    những tổn thất này có thể là những trải nghiệm đáng giá mà qua đó chúng ta sẽ học được những bài học
                    để đời. Lộ trình đầy cam go này là không thể tránh được, do đó, tốt nhất là gia đình và bản thân
                    người mang bốn số 7 cần thay đổi quan điểm về cuộc sống, từ “ ly nước đã vơi một nửa ” sang “ ly
                    nước còn đầy một nửa ” , để có thể vượt qua chặng đường gập ghềnh này.</strong></em></p></div>
        },
        // 5: {
        //     title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
        //     meaning: <div></div>
        // }
    },
    8: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: <div>
                <p><strong><em>Khi sống tích cực, người có một số 8 trong Biểu đồ sinh vô cùng tỉ mỉ và làm việc có hệ
                    thống. Còn nếu sống tiêu cực, họ sẽ lãnh đạm và không ổn định.</em></strong> Sự ngăn nắp, tỉ mỉ, có
                    sự chú ý hợp lý đến các chi tiết và quan tâm đến hiệu quả công việc là bản chất tự nhiên của những
                    người này. Đây là những đặc điểm đến từ “ kho trí thức ” thực tế của họ, vốn là nền tảng cho sự phát
                    triển tính độc lập ở nhóm người này.</p>
                <p>Tuy nhiên, nếu chọn hướng tiêu cực, họ sẽ không ổn định về mặt cảm xúc, dễ bực bội và bồn chồn, mà
                    hậu quả là họ thường thay đổi công việc, nhà ở và cả những mối quan hệ.</p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: <div>
                <p><strong><em>Khả năng đánh giá của hai số 8 trên Biểu đồ ngày sinh có thể cực kỳ có lợi cho người sở
                    hữu nó, hoặc sẽ khiến họ trở nên vô cùng không ổn định, tùy thuộc vào mức độ tích cực của
                    h</em></strong>ọ. Nếu nói về sự quan tâm đến chi tiết, những người này xuất sắc đến mức khó ai bì
                    kịp. Nhưng họ cần ý thức để khả năng quan sát này không khiến họ tự tin thái quá đến mức trở nên độc
                    tài. Vì điều này sẽ gây ra sự mâu thuẫn về cảm xúc trong chính bản thân họ, dẫn tới hậu quả là sự
                    bất an cao độ và tính bất ổn định về cảm xúc.</p>
                <p>Nhu cầu đi tìm chân lý và sự thông thái cũng có thể khiến họ đứng ngồi không yên, nhưng theo hướng
                    tích cực. Nó tạo cảm hứng cho họ du lịch đó đây, mà qua đó họ sẽ lượm lặt được nhiều kinh nghiệm,
                    kiến thức và tri thức. Nếu lúc trẻ họ không du lịch nhiều, sự thất vọng trong lòng họ có thể phát
                    triển và ngày càng khiến họ khó chịu hơn. <em><strong>Điều này có thể gây ra cảm giác bị trói buộc,
                        và chỉ khi nào có cơ hội đi đó đây thì họ mới có thể tìm lại được cảm giác bình yên trong tâm
                        trí.</strong></em></p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: <div><p>Ở người có ba số 8 trong Biểu đồ ngày sinh, cảm giác bồn chồn khó chịu thường đến từ khía
                cạnh tiêu cực hơn là từ khía cạnh tích cực. Họ cảm thấy cuộc sống vô nghĩa và thật đáng chán, và do đó,
                họ trở thành nạn nhân của sự bi quan cùng cực. <em><strong>Những người này cần rất nhiều tình yêu thương
                    và sự hướng dẫn để khuyến khích họ có cái nhìn rộng mở và lạc quan hơn về cuộc đời. Suy cho cùng, họ
                    cần hiểu rằng cuộc sống này vẫn tiếp diễn, cho dù họ có tích cực tận hưởng nó hay
                    không.</strong></em></p>
                <p>Tất cả những gì họ cần làm là thay đổi thái độ và nhảy xuống nước để tham gia cuộc bơi đua, thay vì
                    đứng trên bờ than thở về nhiệt độ của dòng nước mà họ thậm chí còn chưa nhúng chân xuống
                    thử. <strong><em>Đối với người có ba số 8 biết hướng về sự tích cực, cuộc sống của họ là chuỗi ngày
                        tỏa sáng của trí tuệ và cảm giác độc lập đáng tự hào.</em></strong></p>
                <p>Ngay cả khi họ luôn thích xê dịch, sự bình yên trong tâm hồn và năng lượng của niềm vui sống luôn
                    giúp họ có rất nhiều bạn bè. Thật không may là chỉ có một số rất ít người có ba số 8 có thể sống
                    theo hướng này, nhưng hy vọng sẽ có những người đọc được những lời này và chuyển tiêu cực thành tích
                    cực, từ đó thay đổi cuộc đời mình theo chiều hướng tốt hơn.</p>
            </div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: <div><p><em><strong>Những người có bốn số 8 trong ngày sinh thường cực kỳ năng động, đôi khi trở
                thành “ tăng động ” </strong></em>. Những đứa trẻ có bốn số 8 không bao giờ chịu ngồi yên, vì đối với
                chúng thì đây là hành động “ bất thường ”, khiến cảm xúc của chúng bị dồn nén và cuối cùng sẽ “ bùng nổ
                ” thành cảnh gà bay chó sủa. Người thuộc nhóm này cần được dạy để phát triển khả năng định hướng chính
                xác từ khi còn nhỏ, và nên được đưa đi đó đi đây thường xuyên cho đến khi họ đủ trưởng thành để có thể
                tự đi một mình.</p></div>
        },
        // 5: {
        //     title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
        //     meaning: <div></div>
        // }
    },
    9: {
        1: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: <div>
                <p><strong><em>Số 9 mang ba giá trị lớn là tham vọng / hoài bão, trách nhiệm và lý tưởng. Đây là sức
                    mạnh nền tảng cho sự phát triển của xã hội thế kỷ trước, thúc đẩy chúng ta tìm hiểu cuộc sống nhiều
                    hơn và kiểm soát nó tốt hơn. </em></strong>Thầy David nhắc nhớ rằng đừng nghĩ có được ba giá trị lớn
                    này thì chúng ta đã thành công. Mặc dù so với đầu thế kỷ 20, giờ đây chúng ta hiểu biết hơn về môi
                    trường sống và giá trị của con người, nhưng chúng ta cũng khiến môi trường xuống cấp hơn, bệnh tật
                    xuất hiện nhiều hơn, sự đói nghèo cũng gia tăng hơn bất kỳ giai đoạn nào trong hai thế kỷ vừa
                    qua<em><strong>. Chúng ta đã sai ở đâu? Có phải chúng ta đã tập trung vào tham vọng và không đủ chú
                        trọng yếu tố trách nhiệm và lý tưởng?</strong></em>
                </p>
                <p>Để phát huy sức mạnh của một số 9 một cách hiệu quả nhất, chúng ta cần học cách cân bằng ba giá trị
                    này, tạo thành thế hài hòa, vững chãi như kiềng ba chân. Bất kỳ sự bù đắp quá mức nào cũng chỉ làm
                    sự mất cân bằng thêm trầm trọng và dẫn đến những điều tệ hại khác mà thôi .<strong><em> Hãy nhớ rằng
                        sự cân bằng mới là quan trọng nhất.</em></strong></p>
            </div>
        },
        2: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: <div>
                <p>Tính lý tưởng và sự nhiệt tình được tăng cao, kèm theo những suy nghĩ cực kỳ nghiêm túc chính là đặc
                    điểm của những người có hai số 9 trong Biểu đồ ngày sinh. Họ thường thể hiện tính lý tưởng một cách
                    thái quá đến mức những lý tưởng đó gần như phi thực tế. <em><strong>Do đó, họ cần nỗ lực duy trì sự
                        cân bằng giữa tính thực tế và lý tưởng. Nếu muốn có cuộc sống hạnh phúc, những người này cần
                        kiềm chế khuynh hướng phê bình những người mà họ cho là có mức độ lý tưởng thấp hơn
                        mình.</strong></em></p>
                <p>Mặt khác, nhóm người có hai số 9 thường có tư duy sâu sắc, và đằng sau tất cả những gì họ làm chính
                    là mong muốn được trở thành người hữu ích. Họ chỉ cần tập thể hiện mong muốn này cho rõ ràng và
                    tránh để nó bị lợi dụng.</p>
            </div>
        },
        3: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: <div><p>Với ba số 9 trong Biểu đồ ngày sinh, sức mạnh của tính lý tưởng và tham vọng trở nên vượt
                trội đến mức khó kiểm soát. Sức mạnh này đôi khi còn gây ra mất cân bằng về mặt tâm trí đối với những ai
                không nhận ra nó. <em><strong>Vấn đề này có thể được khắc phục bằng cách sớm xác định những đứa trẻ có
                    ba số 9 trong biểu đồ và dạy trẻ cách biểu đạt đồng đều trên cả ba phương diện chứ không chỉ tập
                    trung vào phương diện trí não.</strong></em></p>
                <p>Thêm vào đó, khi sống tiêu cực thì những người thuộc nhóm này còn hay có xu hướng phóng đại mọi thứ.
                    Điều này thường gây ra những cơn giận bộc phát, mất kiểm soát cảm xúc, thậm chí còn có nguy cơ làm
                    tổn hại đến sự cân bằng về mặt tâm trí. Bài học thiết yếu cho những người có ba số 9 là nhìn nhận
                    mọi sự một cách khách quan và đúng với giá trị thực của chúng. <strong><em>Điều này sẽ giúp họ bớt
                        phán xét và có thể chấp nhận những sự “ lệch pha ” nho nhỏ so với hệ thống lý tưởng cứng nhắc
                        của mình.</em></strong></p></div>
        },
        4: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: <div><p>Thi thoảng chúng ta gặp một số người có bốn số 9 trong Biểu đồ ngày sinh. Mặc dù chỉ chiếm
                tỷ lệ rất nhỏ trong dân số, họ thật sự cần được hỗ trợ. Thầy David chia những người này thành hai nhóm
                riêng biệt: Phổ biến nhất là nhóm những người sống mơ màng trong một thế giới kém thực tế. Họ thường rơi
                ra khỏi guồng quay của xã hội vì không thể nắm bắt được những yếu tố thực tế trong cuộc sống, thứ không
                thể đẹp và hoàn hảo như trong lý tưởng của họ. Một số khác thì không đến mức như thế. Họ có vẻ “ bình
                thường và ngoan ngoãn cho đến khi chịu hết nổi - khi đó họ sẽ tự tách mình ra khỏi xã hội hoặc tự khóa
                mình trong nhà suốt nhiều ngày hoặc nhiều tháng trời.</p>
                <p>Đây là những người không gây hại gì, nhưng cũng không cho rằng mình có bất cứ điều gì bất thường và
                    không chịu đón nhận sự hỗ trợ hoặc dẫn dắt. Nhóm thứ hai là những người có thái độ quá khích, thù
                    hằn và có vẻ tìm sự thỏa mãn qua việc miệt thị những người mà theo quan điểm của họ là quá kém so
                    với lý tưởng của họ. <strong><em>Đây là những người có thể trở nên nguy hiểm và cần được dẫn dắt cẩn
                        thận, nếu không họ vô cùng cô đơn hoặc làm hại bản thân và người khác trong cơn nóng giận khó có
                        thể kiềm chế của mình.</em></strong></p>
            </div>
        },
        5: {
            title: 'Bạn Sở Hữu ' + BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: <div><p>Đây là những người không gây hại gì, nhưng cũng không cho rằng mình có bất cứ điều gì bất
                thường và không chịu đón nhận sự hỗ trợ hoặc dẫn dắt. Nhóm thứ hai là những người có thái độ quá khích,
                thù hằn và có vẻ tìm sự thỏa mãn qua việc miệt thị những người mà theo quan điểm của họ là quá kém so
                với lý tưởng của họ. <strong><em>Đây là những người có thể trở nên nguy hiểm và cần được dẫn dắt cẩn
                    thận, nếu không họ vô cùng cô đơn hoặc làm hại bản thân và người khác trong cơn nóng giận khó có thể
                    kiềm chế của mình.</em></strong></p>
                <p><strong><em>Hy vọng cha mẹ của những đứa trẻ này được trang bị đầy đủ kiến thức về Nhân số học để có
                    thể vượt qua thử thách và dạy các con về tính thực tế và lòng trắc ẩn.</em></strong></p>
            </div>
        }
    }
}
