const ResumeTH = () => {
  return (
    <div className="resume">
      <div className="id">
        <div className="image-container"></div>
        <h1>ชิตดนัย คำตุ้ม</h1>
      </div>
      <div className="resume-content">
        <div className="education">
          <div className="title">วัน / เดือน / ปี เกิด</div>
          <ul>
            <li>20 สิงหาคม 2538</li>
          </ul>
          <div className="title">การศึกษา</div>
          <ul>
            <li className="h1">วิทยาลัยเทคนิคเชียงราย</li>
            <ul>
              <li>ประกาศนียบัตรวิชาชีพ | 27 มีนาคม 2557</li>
              <li>ช่างอิเล็กทรอนิกส์ | 3.46 GPA</li>
            </ul>

            <li className="h1">มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงราย</li>
            <ul>
              <li>ปริญญาตรี วิศวกรรมศาสตรบัณฑิต | 25 กุมภาพันธ์ 2561</li>
              <li>วิศวกรรมไฟฟ้า | 2.93 GPA</li>
            </ul>
          </ul>
          <div className="title">ความสนใจ งานอดิเรก</div>
          <ul>
            <li>วิ่ง, เล่นเกม, เล่นกีต้าร์, เขียนโค้ด, อ่านหนังสือ</li>
          </ul>
        </div>
        <div className="EXP">
          <div className="title">ประสบการณ์การทำงาน</div>
          <ul>
            <li className="h1">Master Progression Technology Co.,Ltd.</li>
            <li className="h2">(กรกฎาคม 2561 - เมษายน 2562)</li>
            <ul>
              <li>
                <div className="position">Admin</div>
                <ul>
                  <li>ตรวจเช็คเอกสาร , จัดเตรียมเอกสาร , เจ้าหน้าที่คลัง</li>
                </ul>
              </li>
            </ul>

            <li className="h1">
              บริษัท สยามโกลบอลเฮ้าส์ จำกัด (มหาชน) สาขาเชียงราย
            </li>
            <li className="h2">(กันยายน 2562 – มกราคม 2563)</li>
            <ul>
              <li>
                <div className="position">ช่างเทคนิค</div>

                <ul>
                  <li>บำรุงรักษาอาคาร , งานสนับสนุนต่างๆ</li>
                </ul>
              </li>
            </ul>
            <li className="h1">บริษัท อิชิตัน กรุ๊ป จำกัด (มหาชน)</li>
            <li className="h2">(มกราคม 2563 - กันยายน 2565)</li>
            <ul>
              <li>
                <div className="position">ช่างเทคนิค</div>
                <ul>
                  <li>ควบคุมเครื่องจักร , บำรุงรักษาเครื่องจักร</li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="skill">
        <div className="title-skill">ความสามารถ</div>

        <div className="logo">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.img.in.th/images/9c7ad2bd742630378d8b2ea2222680fc.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.img.in.th/images/291340dd4aeec13ddf0d65e02c085276.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.seekpng.com/png/full/80-803597_io-is-compatible-with-all-javascript-frameworks-and.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/php-logo-png/php-logo-php-elephant-logo-vectors-download-5.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTH;
