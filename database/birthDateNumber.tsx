import {ReactElement} from 'react'

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
    ZERO = ' số 0'
}

type TBirthDateNumberMeaning = {
    [key: number]: {
        [key: number]: {
            title: string
            meaning: string | ReactElement
        }
    }
}

export const BIRTH_DATE_NUMBER_MEANING: TBirthDateNumberMeaning = {
    1: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',

        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.ONE,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
    2: {
        0: {
            title: '',
            meaning: <div>
                Về cơ bản như đã nêu trên thì những con người mang số 2 có trong biểu đồ ngày sinh là sự nhạy cảm, có
                trực giác tốt. Tuy nhiên, tùy vào từng tần số xuất hiện của con số 2 mà chúng mang những ý nghĩa cụ thể
                riêng như sau:
            </div>
        },
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p>Những con người có số 2 trong biểu đồ ngày sinh chỉ xuất hiện một lần thì họ luôn có trực giác ở mức
                    cơ bản nhất. Họ cũng có những đặc điểm riêng về thế mạnh và những điểm hạn chế của mình.</p>
                <h3>Đặc điểm</h3>
                <p>Sở hữu một trực giác ở mức cơ bản không thể đủ trong một xã hội mà tính cạnh tranh đang rất cao đặc
                    biệt đối với phái nam. Xã hội hiện nay của chúng ta rất muôn hình muôn vẻ và đang hướng đến những
                    giá trị nhân đạo cao cả nhất.</p>

                <p>Vì vậy, mỗi con người cần phải tự chuyển mình để có thể hòa chung với guồng quay của xã hội. Như vậy
                    mới có được những thành công như mong đợi.</p>

                <p>Và điều này lại khó khăn cho những con người có số 2 trong biểu đồ ngày sinh chỉ xuất hiện 1 lần.
                    Bởi, chúng đòi hỏi một độ nhạy cảm cao mà con người này họ không có được.</p>

                <p>Nếu không thể cân bằng được thì họ rất dễ bị tổn thương và thường đưa ra những phản ứng chưa thật sự
                    khôn ngoan. Đây là tình trạng mà nam nhi dễ gặp phải nhiều hơn phụ nữ.</p>

                <p>Những người sở hữu chỉ có một con số 2 trong biểu đồ ngày sinh chúng cung cấp một nền tảng giá trị
                    lớn cho việc phát triển sự nhạy cảm. Với phái nữ thì một con số 2 vẫn rất ổn thời sinh ra phái nữ
                    luôn có sẵn trong mình sự nhạy cảm nhất định. Còn đối với nam dù sự nhạy cảm còn yếu nhưng cần phải
                    tích cực trau dồi.</p>
                <h3>Cần cải thiện</h3>
                <p>Để có thể cải thiện được sự nhạy cảm của mình thì những con người này cần phải có nhiều thời gian để
                    thư giãn, tránh xa những môi trường cạnh tranh và áp lực. Như vậy, mới tạo ra một con người mới hoàn
                    toàn nổi bật và đầy cuốn hút.</p>
            </div>
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p>Những con người có số 2 trong biểu đồ ngày sinh xuất hiện tới 2 lần là khá phổ biến. Đây được xem là
                    con số rất đẹp và có lợi thế to lớn trong việc phát triển độ nhạy cảm cùng trực giác của họ.
                </p>
                <h3>Đặc điểm</h3>
                <p>Dù là một con người có độ nhạy cảm và phát triển trực giác tốt nhưng họ cần phải biết sử dụng đúng
                    nơi đúng chỗ. Đừng nên để những lợi thế của mình mãi sâu thẳm trong tâm hồn mà không đưa ra. Với con
                    người nếu sử dụng một cách linh hoạt độ trực giác cùng độ nhạy cảm thì họ đạt được trí thông minh và
                    khả năng thấu hiểu người khác cũng như những tình huống có thể xảy ra.
                </p>
                <p>Với người có số 2 xuất hiện hai lần trong biểu đồ sinh thì trực giác của họ đáng tin cậy ở mức kinh
                    ngạc. Tất cả những ai đối với họ như thế nào dù tốt hay xấu, dù chân thành hay lừa dối thì họ đều có
                    thể nhận ra ngay được. Nhưng để phát huy được những lợi thế của mình những con người này thường phải
                    tránh xa cái tôi của mình.
                </p>
                <p>Chính sự nhạy cảm tuyệt vời của con người này mà họ luôn đạt được rất nhiều những điều mong muốn. Họ
                    luôn xử lý mọi công việc và tình huống rất suôn sẻ và thành công. Tuy nhiên, đừng quá liên quan và
                    bất cứ việc gì mà chỉ làm những điều mà bạn cảm thấy nên làm.
                </p>
                <h3>Cần cải thiện</h3>
                <p>Những con người này thường lao vào công việc hay những đam mê của riêng mình mà quên đi gia đình. Vì
                    vậy, họ cần phải giữ cân bằng giữa cuộc sống và gia đình để trở nên thành công hơn nữa.
                </p>
            </div>
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p>Nếu như số 2 xuất hiện 1 lần được xem ở mức cơ bản, số 2 xuất hiện 2 lần ở mức cân bằng thì số 2 nếu
                    có 3 lần trong biểu đồ sinh thì gọi là mức vượt ngưỡng cân bằng hay còn gọi là mức quá đà. Những đối
                    tượng này họ thường chịu một sự nhạy cảm không cân bằng.
                </p>
                <h3>Đặc điểm</h3>
                <p>Chính sự mất cân bằng về sự nhạy cảm của mình nên họ luôn có một tâm lý bất ổn và thường sẽ bị tác
                    động với tâm lý của những người khác. Từ đó, rất dễ bị lôi kéo vào những vấn đề rắc rối của mọi
                    người. Những người có con số 2 trong biểu đồ ngày sinh xuất hiện 3 lần thì họ thường hay chìm đắm
                    trong thế giới của riêng mình và có thể dần dần phát triển thành sự cô độc và không muốn ai can
                    thiệp vào thế giới của mình.
                </p>
                <p>Những con người này nên làm trong ngành giải trí thì dễ dàng chạm tới thành công. Đôi khi họ lại bị
                    tổn thương vì quá nhập tâm vào công việc. Tuy nhiên, họ luôn bao giờ làm tổn thương người khác và
                    cũng tìm cách để bảo vệ chính mình.
                </p>
                <h3>Cần cải thiện</h3>
                <p>Nếu là các bé có 3 con số 2 xuất hiện trong biểu đồ sinh thì chúng có một bản năng tự nhiên rất giỏi.
                    Tuy nhiên, cha mẹ cũng cần phải quan sát, hướng dẫn và theo dõi con cẩn thận. Hãy hướng cho bé đến
                    sự phát triển cảm xúc một cách cân bằng nhất để tạo ra sự nền tảng và định hướng cho đường đời của
                    bé.
                </p>
            </div>
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning: <div>
                <p>Sự xuất hiện 4 lần con số 2 trong biểu đồ ngày sinh thể hiện một con người mà tính nhạy cảm cực cao.
                    Họ có những đặc điểm mà khiến cho không ít người phải lo lắng. Theo nghiên cứu của những nhà thần
                    học thì những người rơi vào trường hợp này là rất nhỏ.
                </p>
                <h3>Đặc điểm</h3>
                <p>Chính sự nhạy cảm cao của họ mà không được kiểm soát thì rất nguy hiểm có thể dẫn đến sự nóng giận
                    hay một thói mỉa mai và sân si với người khác. Những con người có số 2 xuất hiện tới 4 lần trong
                    biểu đồ ngày sinh thường thiếu kiên nhẫn. Đặc biệt trực giác của họ không đáng tin cậy khiến cho họ
                    luôn rơi vào tình trạng đặt lòng tin nhầm người.
                </p>
                <p>Những con người này họ thường có sự phản ứng thái quá khi gặp bất cứ tình huống nào. Họ thường hay
                    nhẹ dạ và không biết cân bằng cảm xúc. Những con người này thường rất ít bạn bè.
                </p>
                <p>Dù số lượng người có số 2 trong biểu đồ ngày sinh là nhỏ nhưng họ lại chiếm phần lớn tới những người
                    mà hôn nhân không êm ấm, những người phá sản, hay những người không ổn định về thần kinh. Điều này
                    đã được nhà thần học David Philip chỉ ra rõ ràng trong những nghiên cứu của ông.
                </p>
                <h3>Cần cải thiện</h3>
                <p>Những con người này họ thường bị ảnh hưởng bởi gia đình nhiều vì vậy, để giúp họ thoát ra khỏi những
                    điều đen tối của cuộc sống thì gia đình luôn bên họ. Giúp cho họ luôn kiểm soát chặt chẽ bản thân
                    mình về những vấn đề liên quan đến cảm xúc. Những lúc thư giãn nên ngồi thiền và đừng chấp nhận cuộc
                    sống theo một cách tự nhiên mà hãy vươn lên với nghịch cảnh của cuộc sống.
                </p>
            </div>
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.TWO,
            meaning:
                <div>
                    <p>Đây là một trường hợp cực hiếm và chỉ những người sinh ngày 22/02/2002 và những bé sinh ngày
                        22/02/2020. Đây là những con người sẽ có sự phản ứng mạnh mẽ với sự nhạy cảm đặc biệt của mình.
                        Họ luôn cần đến sự quan tâm, hướng dẫn từ gia đình thầy cô khi con nhỏ. Để lớn hơn những con
                        người này luôn đi được đúng hướng hơn.
                    </p>
                    <p>Không có những con số 2 trong biểu đồ ngày sinh xuất hiện từ 1 đến 5 lần mà trong tương lai sẽ
                        xuất hiện 6, 7 lần và đây đều là những đám trẻ hỏi rất nhiều sự dặt dìu của gia đình. Không nên
                        để bé tự phát triển với sự cảm nhận quá mức. Với những chia sẻ trên hy vọng giúp đỡ mọi người
                        hoặc các cha mẹ biết được những điểm đặc biệt để từ đó hướng dẫn con mình, hay chính bản thân
                        mình đi theo hướng tốt nhất.
                    </p></div>
        }
    },
    3: {
        0: {
            title: '',
            meaning: <div>
                <p>Số 3 xuất hiện trong biểu đồ ngày sinh nằm ở trục trí não ngay ỏ vị trí cổng vào. Đặc biệt, số 3 là
                    một con số cũng rất quan trọng trong nhóm các con số về tâm trí chúng phụ trách trí nhớ của mỗi con
                    người . Nếu như số 1, số 2 cân bằng cho cá tính và trực giác của mỗi con người thì số 3 mỗi vị trí
                    đứng của nó mang đến sức mạnh lý tưởng nhất.</p>

                <p>Số 3 trong biểu đồ sinh còn hỗ trợ cho nhiều cá tính khác của con người thông qua Mũi tên chỉ cá tính
                    trong biểu đồ. Hiểu một cách cơ bản nhất người có số 3 xuất hiện trong biểu đồ sinh là một con người
                    có sức mạnh, có lý tưởng, có trí trong cuộc sống. Nói như vậy, không hẳn những người không có số 3
                    không có những sức mạnh đó. Mà họ cần phải cố gắng nhiều hơn nữa trong việc phát triển tâm trí của
                    mình.</p>

                <p>Những con người không có số 3 thường có khuynh hướng lười biếng. Vì vậy, cần phải điều chỉnh ngay từ
                    khi con bé. Nếu không sẽ gặp phải rất nhiều khó khăn sau này. Trong số 3 thì mỗi lần xuất hiện đều
                    mang những tính cách riêng biệt khác nhau. Chúng ta cùng tìm hiểu qua phần tiếp theo đây.</p>
            </div>
        },
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p>Nếu bạn có con số 3 xuất hiện duy nhất một lần trong biểu đồ sinh thể hiện một con người có trí nhớ
                    tốt và rất lâu dài. Nhưng trí nhớ này cần phải mang ra sử dụng vì nếu không dùng tới dần dần chúng
                    teo lại và không còn giá trị gì. Con số 3 trong biểu đồ thể hiện sự nhanh nhạy trong trí não của họ.
                </p>
                <p> Nếu các em nhỏ có một con số 3 trong biểu đồ sinh chắc chắn là một bé học tập rất thông minh bởi trí
                    nhớ tốt. Lớn lên sẽ rất ham học hỏi và luôn chủ động quan tâm đến mọi vấn đề trong cuộc sống.
                </p>
                <p>Không chỉ vậy, những con người sở hữu duy nhất một con số 3 trong biểu đồ sinh cũng rất linh hoạt họ
                    tích cực trong lối sống, trong công việc.
                </p>
                <p>Vì vậy, họ luôn đạt được những gì mà mình mong muốn. Những con người này luôn có được sự tự tin cao
                    và cũng góp phần không nhỏ đến thành công trong tương lai của họ.
                </p>
            </div>
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p>Nếu như người có một số 3 trong biểu đồ ngày sinh thì có sự linh hoạt và khả năng ghi nhớ tốt. Thì
                    những con người có 2 lần xuất hiện số 3 thì độ linh hoạt và trí não của họ tăng lên gấp đôi. Họ là
                    những con người rất giàu trí tưởng tượng và có một khả năng về văn chương cực đỉnh.
                </p>
                <p>Tuy nhiên, những con người này cần phải luôn được theo dõi chặt chẽ và phát triển những lợi thế của
                    mình theo hướng tích cực và cân bằng nhất. Tránh tình trạng đi theo những tiêu cực xấu ảnh hưởng tới
                    xã hội, gia đình và chính bản thân mỗi người.
                </p>
                <p>Những con người này cần phải có được sự tự kỷ luật cho bản thân và cần có sự những không gian tĩnh
                    tâm để luyện tập trí nhớ của mình. Vì vậy, bạn có thể luyện những bài phát triển trí não bằng cách
                    thiền hoặc những bài tập chuyên dụng. Tuy nhiên, cũng nên phải nhớ rằng nếu mọi người nuông chiều
                    trí tưởng tượng của mình sẽ khiến mất đi luôn tính thực tế cần thiết.
                </p>
                <p>Những con người mang số 3 trong biểu đồ sinh thường có khả năng viết lách rất tốt. Nếu họ được khích
                    lệ và làm việc theo sự đam mê của mình chắc chắn việc viết lách sẽ đem về một khoản thu nhập không
                    hề nhỏ cho họ.
                </p>
            </div>
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p>Trường hợp tiếp theo là con số 3 trong biểu đồ ngày sinh xuất hiện 3 lần. Đây là con số thể hiện mức
                    độ nhạy bén rất mạnh mẽ và mãnh liệt. Tuy nhiên, chính điều này lại khiến cho họ mất sự liên kết với
                    thực tế. Cuộc sống sẽ ngày càng trở nên đơn độc.
                </p>
                <p>Những con người này họ thường độc lập trung suy nghĩ, không nghe ai cũng không chịu nhìn nhận theo
                    thực tế. Chính điều này khiến cho họ càng trở nên đơn độc hơn bao giờ hết. Họ luôn thể hiện trí
                    tưởng tượng về một tương lại rất xa và mường tượng ra một cảnh tượng phi thực tế và hết sức lạ lùng.
                    Những con người này họ không bao giờ tập trung vào hiện tại mà chỉ lo đến tương lai và không tập
                    trung vào những mối quan hệ đang có với người xung quanh.
                </p>
                <p>Với sự suy nghĩ như vậy nên họ ít khi tin tưởng người khác không chịu thư giãn. Con người này họ
                    không cảm thấy sự hạnh phúc. Đôi khi lại bị đắm chìm vào trong những viễn du của tương lai mà quên
                    mất thực tại của mình. Những điều này không hề tốt cho họ khiến họ mất đi một góc nhìn cuộc sống
                    chân thực hơn. Càng có suy nghĩ như vậy thì họ càng đơn độc hơn trong cuộc sống.
                </p>
                <p>Với những con người này để thay đổi thì cần phải có người thấu hiểu và hết sức kiên nhẫn đem đến
                    những sự yêu thương cần thiết, những định hướng thận trọng trong tương lai. Cần phải có người dạy họ
                    về tính thực tế chỉ cần sử dụng những ngôn ngữ khéo léo họ sẽ nghe theo và dần dần thay đổi theo
                    những hướng tích cực và tốt đẹp hơn.

                </p>
            </div>
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.THREE,
            meaning: <div>
                <p>Trường hợp số 3 trong biểu đồ ngày sinh xuất hiện 4 lần thì đây là một trường hợp rất đặc biệt thậm
                    chí là rất hiếm. Chúng chỉ xảy ra duy nhất ở một tháng trong một thế kỷ đó là ngày 31/3/1993.
                </p>
                <p>Còn trong tương lại thì chúng có thể xảy ra ở những người sinh ngày 3/3/2033. Những con người càng
                    nhiều số 3 này thì trí tưởng tưởng ngày dày hơn và kéo theo đó là những khó khăn của họ cần phải
                    trải qua cũng rất nhiều.
                </p>
                <p>Số 3 xuất hiện 4 lần trong biểu đồ ngày sinh là rất hiếm gặp
                </p>
                <p>Như vậy, con số 3 trong biểu đồ ngày sinh là một trong những con số thể hiện trí tưởng tượng của con
                    người. Nếu tần số xuất hiện càng nhiều thì trí tưởng tượng càng phong phú. Tuy nhiên, sự phong phú
                    đó lại khiến cho con người rời xa thực tế, đây là điều không tốt. Những con người này cần phải nắm
                    bắt được những hạn chế của mình. Từ đó có được sự khắc phục nếu một trí tưởng tượng phong phú đi
                    liền với thực tế thì chắc chắn bạn sẽ thành công.
                </p>
            </div>
        }
    },
    4: {
        0: {
            title: '',
            meaning:
                <div>
                    <p>Với những người hiểu về nhân số học thì có lẽ đều biết con số 4 chính là con số nằm ở giữa của
                        trục ngang thể chất. Đặc biệt, chúng thể hiện cho con số vuông vắn và theo nghiên cứu của những
                        nhà thần học thì những con người có số 4 này thường là người rất thực tế, gọn ghẽ và đặc biệt có
                        óc tổ chức.
                    </p>
                    <p> Song, không phải những người không có số 4 trong biểu đồ ngày sinh là người không thực tế mà họ
                        chỉ là những con người thiếu đi sự kiên nhẫn ở một lĩnh vực nào đó. Cụ thể, nếu người nào đó
                        không có số 4 nhưng có đủ các số như 3,6,9 ở mũi tên trí nhớ thì họ là đối tượng mà không kiên
                        nhẫn được với những ai chậm hiểu.
                    </p>
                    <p>Nhưng nếu người vắng số 4 nhưng lại có đủ các số là 2,5,8 là các mũi tên về cân bằng cảm xúc. Thì
                        họ chính là những người không kiên nhẫn được với đối tượng không kiểm soát được cảm xúc riêng
                        của chính mình. Tuy nhiên, những con người thiếu đi sự kiên nhẫn vẫn có thể được cải thiện khi
                        nhận biết được điểm yếu của mình và quyết tâm thay đổi. Hãy dùng sự yêu thương, quan tâm của
                        mình để có thể hóa giải những tính cách khó chịu của bản thân.
                    </p>
                </div>
        },
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
            meaning:
                <div>
                    <p>Phổ biến nhất là những con người mà trên biểu đồ sinh của họ chỉ xuất hiện 1 lần con số 4. Đây là
                        mẫu người rất chủ động trong mọi việc, họ luôn hăng hái thực tế trong công việc. Đặc biệt, những
                        con người này thường tích cực trong những hoạt động liên quan đến tài chính, kỹ thuật hay tổ
                        chức….
                    </p>
                    <p>Những người có con số 4 trong biểu đồ ngày sinh thì thường bị con số chủ đạo lấn át. Vì vậy, để
                        thể hiện rõ nhất ý nghĩa của con số 4 này thì cần phải biết được con số chủ đạo của người đó.
                        Ghép hai đặc trên lại sẽ nói lên tất cả về con người này.
                    </p>
                    <p>Ngoài ra, những con người số 4 có trong biểu đồ sinh họ thích bắt tay làm ngay những việc thực tế
                        hơn là ngồi suy ngẫm về các hệ thống lý luận. Đặc biệt, họ rất dễ hoài nghi với những sự việc mơ
                        hồ không đi sát vào thực tế. Con người này thích sự thực tế hơn lý thuyết và không kiên nhẫn với
                        những người hay trễ hẹn. Đây chính là một đặc điểm bất di bất dịch ở con người có 1 số 4 trong
                        biểu đồ sinh.
                    </p>
                    <p>Tuy nhiên, nếu những người này quan tâm nhiều đến thể chất thì khiến cho họ đang thiên về vật
                        chất. Đây chính là một khía cạnh tiêu cực của con người số 4. Song, điều này lại là một cách để
                        thử thách lòng kiên nhẫn của chính họ. Thông qua vấn đề này sẽ giúp cho con người có 1 số 4 xuất
                        hiện trong biểu đồ sinh sẽ biết cách quan tâm và yêu thương người khác nhiều hơn.
                    </p>
                </div>
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
            meaning:
                <div>
                    <p>Nếu người có số 4 xuất hiện 1 lần là người thực tế thì sự xuất hiện 2 lần con số 4 trong biểu đồ
                        ngày sinh sẽ giúp cho mọi người có cái nhìn không cân bằng về cuộc sống. Họ luôn quy mọi vấn đề,
                        mọi thứ về giá trị vật chất. Do đó, những con người này cần phải học cách cân bằng và hài hòa
                        giữ tinh thần, vật chất và trí não. Có được như vậy họ mới sống cảm xúc và luôn tư duy hơn.
                    </p>
                    <p>Với trường hợp này nếu con số chủ đạo của họ là một trong số trục Tâm hồn như các số 2,5,8 hay
                        3,6,9 của trục trí não thì họ là những người có cảm nhận về tinh thần và trí não cao hơn người
                        bình thường. Khi người càng nhiều số 4 xuất hiện trong biểu đồ sinh thì cần phải học cách cần
                        đối giữa trí não – tinh thần – vật chất.
                    </p>
                    <p>Cần tránh xa những bạn bè xấu tác động tiêu cực đến bạn. Nhưng nếu là những người bạn tốt biết
                        trân trọng chính bạn hay những nền văn hóa, thẩm mỹ đạo đức trong cuộc sống thì như vậy sẽ giúp
                        cho bạn trở nên cân bằng và hướng tới nhiều điều tốt đẹp hơn.
                    </p>
                </div>
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.FOUR,
            meaning:
                <div>
                    <p>Trường hợp cuối cùng chính là con số 4 xuất hiện tới 3 lần trong biểu đồ sinh. Đây là cấp độ thể
                        hiện mãnh liệt hơn của những con người có số 4 xuất hiện 2 lần. Cụ thể, những con người này
                        thường bị cột chặt vào những giá trị vật chất. Dù họ có ý thức để thoát ra nhưng giá trị của vật
                        chất quá lớn sẽ lôi kéo họ quay trở lại.
                    </p>
                    <p>Phải những con người có ý thực cực cao mới có thể thoát ra khỏi những điều đó. Đồng thời, những
                        con người này cần phải luôn luôn trau dồi về mặt trí não, tinh thần. Đặc biệt rất cần đến sự
                        định hướng, dẫn dắt của một người đáng tin cậy. Người có nhiều số 4 thường là những người đam mê
                        vật chất luôn lao động cực nhọc và làm việc không ngừng nghỉ.
                    </p>
                    <p>Họ không nắm được giá trị, niềm vui của công việc đó mang đến mà chỉ vùi đầu làm đầy tớ của công
                        việc sao cho có được nhiều tiền nhất. Dù họ nhận ra được điều này nhưng không hề đơn giản để có
                        thể thoát khỏi ra được. Với con người này việc cân bằng trí não – tinh thần – thể chất càng cần
                        thiết và cấp bách hơn bao giờ hết.
                    </p>
                    <p>Điểm đặc biệt của con số 4 trong biểu đồ sinh so với những con số khác đó chính là không có
                        trường hợp con số đơn độc nằm ở các góc như những con số khác. Vì vậy, khó có thể nhận được sự
                        hỗ trợ từ những con số nào khác.
                    </p>

                    <p>Người có con số 4 trong biểu đồ ngày sinh là những con người thiên về thực tế và vật chất. Điều
                        này không hề xấu tuy nhiên họ cần phải hiểu rõ được và cân bằng mọi vấn đề. Như vậy, cuộc sống
                        của họ mới trở nên đơn giản và cân bằng thoải mái hơn. Hãy tạo niềm vui trong công việc đừng coi
                        nó là “ông chủ” của mình cần phải cung phụng thay vào đó hãy coi đó là phương tiện để đạt được
                        mục đích sống.
                    </p>
                </div>
        }
    },
    5: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.FIVE,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
    6: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.SIX,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
    7: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.SEVEN,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
    8: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.EIGHT,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
    9: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.NINE,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
    0: {
        1: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.ONE + BIRTH_DATE_NUMBER_SUBSECTION.ZERO,
            meaning: 'Những người có Biểu đồ ngày sinh có một số 1 thường gặp một chút khó khăn trong việc thể hiện bản thân qua ngôn ngữ. Điều này không có nghĩa là họ không thể nói chuyện một cách suôn sẻ, mà là họ khó diễn đạt được cảm xúc nội tâm của mình.\n' + '\n' + 'Họ có thể nói rất lưu loát và đầy thuyết phục về các đề tài không liên quan đến diễn đạt cảm xúc cá nhân, nhưng thường không biết cách biểu đạt bản thân hoặc diễn tả những gì mình đang cảm thấy. Chỉ khi nào họ học được cách làm chủ bản thân - kết quả của quá trình trưởng thành và thấu hiểu - thì điều này mới được cải thiện. Đôi khi họ sẽ cố ý nói ra những lời hoàn toàn trái ngược với suy nghĩ thật sự của mình như một kiểu phản ứng tự vệ - tức là họ Cố ý làm tổn thương hoặc xúc phạm người khác để tự bảo vệ bản thân mình. Điều này khiến vấn đề ban đầu trở nên nghiêm trọng hơn và gây ra những cuộc tranh cãi gay gắt. Họ cần tập suy nghĩ cẩn trọng trước khi phát biểu, và họ có thể làm được điều ấy bằng cách học kiểm soát phản ứng của bản thân trước các ý kiến, lời phê bình, vì những lời nói đã nói ra thì không thể thu hồi và cảm giác tổn thương rất khó được chữa lành. Để cải thiện hạn chế này, hãy lấy một quyển số trắng và ghi ngày tháng hiện tại. Sau đó, vào buổi tối, trước khi đi ngủ, hãy dành vài phút viết ra những suy nghĩ và cảm nhận của bạn về ngày hôm nay. Nhớ ghi rõ cả những việc bạn vốn dĩ muốn làm, những lời bạn vốn dĩ muốn nói, nhưng rốt cuộc đã không thực hiện được và những điều bạn đã nói hay lỡ làm mà bạn ước gì bạn đã không làm hay nói. Buổi sáng hôm sau, bạn hãy đọc to toàn bộ nội dung đó trước một tấm gương lớn và quan sát ngôn ngữ cơ thể bạn.\n' +
                '\n' + 'Hãy làm điều này thường xuyên và bạn sẽ nhìn thấy sự tự tin trong việc diễn đạt bản thân được cải thiện thấy rõ, về cuộc sống, những người có một số 1 thường cảm thấy thiếu một điều gì đó trong cuộc sống, mặc dù thoạt nhìn họ rất đủ đầy ở một số mặt.',
        },
        2: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.TWO + BIRTH_DATE_NUMBER_SUBSECTION.ZERO,
            meaning: 'Người có hai số 1 (11) trong Biểu đồ ngày sinh là người may mắn nhất trong cả nhóm, bởi sự cân bằng trời cho trong việc diễn đạt nội tâm. Đây là một đặc điểm nên được sử dụng một cách khôn ngoan - không bao giờ lạm dụng nó cho mục đích thao túng người khác. (Đồng thời hãy nhớ đừng mất kiên nhẫn với những người không may mắn không có hai số 1 giống bạn, đặc biệt nếu đó là người yêu hoặc người bạn đời của bạn.) Người có hai số 1 thường có khả năng nhìn nhận các vấn đề hay các cuộc tranh luận theo cả hai mặt, và vì vậy họ hoàn toàn có khả năng chuyển sang hướng đối lập trong một cuộc thảo luận nếu quan điểm của bên đó có vẻ có giá trị hơn. Điều này giúp họ không bị sa vào tư duy bảo thủ, thứ khiến tầm hiểu biết bị giới hạn một chiều, và vì thế bản thân họ cũng thường ít khi bắt bẻ những “ lỗi sai ” của người khác. Có thể nói người có hai số 1 trong biểu đồ thường dễ có cuộc sống cân bằng, an vui, bất kể cuộc sống có diễn ra thế nào. Về nhận định này, tôi có hai điều muốn chia sẻ kỹ hơn : Một Biểu đồ ngày sinh sẽ bao gồm rất nhiều yếu tố chi tiết bên trong, yếu tố này hòa quyện với yếu tố kia, hay yếu tố này mâu thuẫn với yếu tố kia, làm giảm giá trị của yếu tố kia.\n' +
                '\n' + 'Ví dụ, nếu một người có được hai số 1 nhưng lại trống hoàn toàn cột giữa (4-5-6 - mang ý nghĩa Mũi tên uất giận, vì họ mãi không đạt được điều mình khát khao muốn có) , và đặc biệt nếu có thêm số 7 (hay 77, hay 777) thì người đó rất dễ gặp phải một trong những điều bất ý lớn trong các khía cạnh: sức khỏe, tiền tài, tình yêu, sự nghiệp ... Nhưng nhờ sức mạnh của hai số 1, người đó vẫn hay dùng lòng tin để tiếp thu cái mới, từ đó khiến bản thân gặp nhiều thiệt thòi. Tuy nhiên, nhờ trong Biểu đồ ngày sinh của tôi có hai số 1 (11) nên tôi có được một đặc điểm (như đã đề cập ở trên) : dễ dàng nhìn được hai mặt của một vấn đề, chịu thay đổi quan điểm một khi thấy các quan điểm khác cũng đúng hoặc có giá trị. Điều này đặc biệt ý nghĩa với các vấn đề mang tính trực giác, đòi hỏi sự hiểu biết sâu xa hơn những gì mắt thường nhìn thấy. Cho nên hiện giờ tôi đã thôi không còn dùng khái niệm “ thấy mới tin ” nữa, mà bắt đầu lắng tâm mình hơn, mỗi ngày một phát huy trực giác (còn gọi là “ con mắt ” bên trong) để cảm mọi việc, nhờ vậy tôi có thể tiếp thu nhiều cái mới mẻ hơn, rộng lớn hơn. Như vậy, hai số 1 (11) đã giúp tôi hóa giải bớt tính “ cứng đầu ” của Mũi tên 1-4-7 đó.\n' +
                '\n' + 'Trở lại với những đặc điểm nổi bật của hai số 1 (11) :\n' + '\n' + 'Chính nhờ những yếu tố tích cực, dung hòa và cân bằng này mà người có hai số 1 trong biểu đồ dễ trở thành các chính trị gia thành công hoặc người của công chúng, người nổi tiếng. Yếu tố hai số 1 làm nổi bật nhận thức về con người, cũng như cách biểu đạt bản thân và khả năng nhìn nhận vấn đề một cách đa chiều, không phiến diện, giúp giảm thiểu khả năng bị hiểu lầm.',
        },
        3: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.THREE + BIRTH_DATE_NUMBER_SUBSECTION.ZERO,
            meaning: 'Với những người có ba số 1 trong Biểu đồ ngày sinh, có hai khả năng khá đối lập xảy ra trong thực tế. Khả năng thường gặp nhất là những người này thuộc dạng nói rất nhiều, thường có mặt trong rất nhiều cuộc trò chuyện sôi nổi mà trong đó họ trở nên nổi bật và thú vị. Nhìn chung họ thấy cuộc sống dễ chịu và thường cố gắng chia sẻ điều đó với những người xung quanh, Nhóm thứ hai là những người cũng có ba số 1 nhưng lại không có số nào ở Trục ngang Tinh thần (tức là không có các số 2-5-8) . Những người này khá im lặng, hướng nội, bẽn lẽn, đặc biệt là với người lạ. Tuy nhiên, họ có thể hoạt bát và nói nhiều khi trò chuyện với bạn bè thân thiết hoặc người thân trong nhà - đó là những lúc họ cảm thấy thoải mái. Những người này thường dễ diễn đạt cảm xúc hay nội tâm của mình bằng cách viết, vì khi đó dòng suy nghĩ của họ liền mạch hơn, không bị cản trở bởi sự nhạy cảm quá mức của họ. Nếu bạn thuộc nhóm này mà chưa biết sức mạnh khả năng viết lách của mình, hãy thử xem sao. Hãy xem viết lách là một cách để tập diễn đạt bản thân cho trôi chảy, khơi thông những cảm xúc rối rắm tắc nghẽn trong lòng, cũng như là một cách để tự chữa lành. Ngoài ra, còn một khả năng nữa ở những người có ba số 1 mà bản thân tôi quan sát thấy, đó là tâm trạng lúc vui lúc buồn. Tùy theo những yếu tố khác trong Biểu đồ ngày sinh mà tỷ lệ vui buồn sẽ gia giảm khác nhau, tốt nhất thì được 5/5, còn không thì 4/6, không nữa thì 3/7, lúc vui họ có xu hướng nói rất nhiều, lúc buồn thì ngồi im, không quan tâm tới ai.',
        },
        4: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FOUR + BIRTH_DATE_NUMBER_SUBSECTION.ZERO,
            meaning: 'Người có bốn số 1 trong ngày sinh thường gặp trục trặc với vấn đề diễn đạt bằng lời, và vì vậy, rất dễ bị người khác hiểu lầm. Nhưng cuộc sống nhanh chóng dạy họ giấu đi những cảm xúc rối rắm bằng một nụ cười, cho dù họ có khuynh hướng dẫn tiếp tục chịu đựng bên trong cho đến khi tự có ý thức giải tỏa những cảm xúc đó và sống lẹ làng hơn. Nói một cách dễ hiểu, những người có bốn số 1 thường tự làm mình khổ tâm. Số 1 mang đặc tính về “ cái tôi ” của mỗi người, vậy nên hãy tưởng tượng một người có đến bốn lần “ cái tôi ” như vậy sẽ như thế nào. Họ có “ cái tôi rất mạnh, nhưng rất khó diễn đạt những cảm giác sâu đậm như vậy về bản thân mình. Vì vậy, Thầy David khuyên: vì hạnh phúc của chính mình và của những người thân, những người có bốn số 1 phải học cách kiểm soát cảm xúc của mình. Khi họ thả lỏng hơn, bớt căng thẳng, bớt thiếu tự tin (đôi khi họ không nhận ra điều này, mà trái lại, họ có thể cảm thấy mình quá tự tin là đằng khác), họ sẽ cảm thấy ít bị cản trở hơn và diễn đạt cảm xúc của mình một cách thoải mái hơn, thay vì cứ đè nén những sầu muộn, rối rắm trong nội tâm của mình.',
        },
        5: {
            title: BIRTH_DATE_NUMBER_VNM_SUBSECTION.FIVE + BIRTH_DATE_NUMBER_SUBSECTION.ZERO,
            meaning: 'Với năm hay sáu số 1 trên Biểu đồ ngày sinh, “ cái tôi ” thường bị đè nén để giảm bớt các khó khăn trong việc diễn đạt cảm xúc cá nhân. Những người trẻ tuổi thuộc nhóm này thường cảm thấy buồn vì bị mọi người xung quanh hiểu lầm. Điều này dẫn đến sự tách rời, từ đó gây gia sự cô độc. Họ có thể phát triển theo hướng bị ám ảnh với ngoại hình và hành động của mình, cũng như thường gắn rất nhiều gương trong nhà nhưng lại có xu hướng giấu chúng đi để tránh người khác nghĩ họ quá tự tôn. Nhưng họ vẫn bí mật ngắm mình trong gương mỗi khi có dịp. Tính vị kỷ và “ tự lừa mình ” này có thể gây ra sự mất cân bằng về tâm thần, chúng ta có thể giúp trẻ thuộc nhóm có quá nhiều số 1 gia tăng nhận thức bằng cách cho chúng tham gia nhiều hoạt động nghệ thuật khác nhau, như viết lách, làm thơ, vẽ, làm đồ gốm,... Điều này có thể áp dụng được cho trẻ mọi lứa tuổi.'
        }
    },
}

