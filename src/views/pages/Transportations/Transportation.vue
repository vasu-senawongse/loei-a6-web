<template>
  <div class="home-body">
    <b-container class="my-5" style="background-color : white">
      <b-tabs card fill style="color:white">
        <b-tab active>
          <template v-slot:title>
            <i class="fa fa-road"></i> เส้นทางสู่จังหวัดเลย
          </template>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Loei&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <br />
          <div>
            ระยะทางจากตัวเมืองเลยไปยังอำเภอและกิ่งอำเภอต่าง ๆ
            <br />• อำเภอวังสะพุง 22 กิโลเมตร <br />• อำเภอนาด้วง 37 กิโลเมตร
            <br />• อำเภอท่าลี่ 46 กิโลเมตร <br />• อำเภอเชียงคาน 48 กิโลเมตร
            <br />• อำเภอภูเรือ 49 กิโลเมตร <br />• อำเภอภูหลวง 50 กิโลเมตร
            <br />• อำเภอภูกระดึง 74 กิโลเมตร <br />• อำเภอด่านซ้าย 82 กิโลเมตร
            <br />• อำเภอปากชม 92 กิโลเมตร <br />• อำเภอผาขาว 112 กิโลเมตร
            <br />• อำเภอนาแห้ว 117 กิโลเมตร <br />• กิ่งอำเภอเอราวัณ 42
            กิโลเมตร <br />• กิ่งอำเภอหนองหิน 50 กิโลเมตร
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title> <i class="fa fa-car"></i> รถยนต์ </template>
          <p>
            จากกรุงเทพฯ ใช้ทางหลวงหมายเลข 1(พหลโยธิน) ผ่านตัวเมืองสระบุรี
            ตรงเข้าทางหลวงหมายเลข 21 ผ่านจังหวัดเพชรบูรณ์ ต่อด้วยทางหลวงหมายเลข
            203 ผ่านอำเภอหล่มสัก หล่มเก่า เข้าเขตจังหวัดเลยที่อำเภอด่านซ้าย
            อำเภอภูเรือ ถึงตัวเมืองเลยใช้เวลาเดินทางประมาณ 7-8 ชั่วโมง หรือ
            จากสระบุรี ใช้ทางหลวงหมายเลข 2 มิตรภาพ ผ่านจังหวัดนครราชสีมา
            ถึงจังหวัดขอนแก่น แล้วเลี้ยวซ้ายเข้าทางหลวงหมายเลข 12 ผ่านอำเภอชุมแพ
            แล้วใช้เส้นทางหมายเลข 201 เข้าเขตจังหวัดเลยที่อำเภอภูกระดึง
            อำเภอวังสะพุง ถึงตัวเมืองเลยได้เช่นเดียวกัน
          </p>
        </b-tab>

        <b-tab>
          <template v-slot:title>
            <i class="fa fa-bus"></i> รถโดยสารประจำทาง
          </template>
          <p>
            บริษัท ขนส่ง จำกัด มีรถโดยสารประจำทางวิ่งระหว่างกรุงเทพฯ-เลย ทุกวัน
            ทั้งรถธรรมดาและรถปรับอากาศ ใช้เวลาประมาณ 10 ชั่วโมง
            <br />รายละเอียดสอบถามที่สถานีขนส่ง หมอชิต ถนนกำแพงเพชร 2 โทร.
            <a href="tel:02-936-2841-8">02-936-2841-8</a>
            , <a href="tel:02-936-2852-66">02-936-2852-66</a> หรือ
            <a href="http://www.transport.co.th" target="_blank"
              >www.transport.co.th</a
            >
          </p>
          <p>
            นอกจากนั้นยังมีบริษัทเดินรถเอกชนที่วิ่งบริการ ได้แก่<br />
            บริษัท แอร์เมืองเลย จำกัด กรุงเทพฯ โทร.<a href="tel:029-360-142"
              >029-360-142</a
            >
            สาขาเลย โทร. <a href="tel:042-832-042">042-832-042</a>
            <br />ห้างหุ้นส่วนจำกัด ชุมแพ ทัวร์ กรุงเทพฯ โทร.
            <a href="tel:029-363-842">029-363-842</a> สาขาเลย โทร.
            <a href="tel:042-832-285">042-832-285</a> <br />บริษัท เพชรประเสริฐ
            จำกัด กรุงเทพฯ โทร.
            <a href="tel:029-363-230">029-363-230</a> สาขาอำเภอภูเรือ โทร.
            <a href="tel:042-899-386">042-899-386</a> สาขาอำเภอด่านซ้าย โทร.
            <a href="tel:042-891-908">042-891-908</a>
          </p>
        </b-tab>

        <b-tab>
          <template v-slot:title>
            <i class="fa fa-plane"></i> เครื่องบิน
          </template>
          <p>
            ท่าอากาศยานเลย เลขที่ 38 หมู่ 6 ถนน มลิวรรณ ตำบลนาอาน อำเภอเมือง
            จังหวัดเลย ประเทศไทย 42000 <br />
            <i class="fa fa-phone mr-2" aria-hidden="true"></i>
            <a href="tel:042-811520-1">042-811520-1</a> ,
            <a href="tel:042-811613">042-811613</a>
            <br />
            <i class="fa fa-link mr-2" aria-hidden="true"></i
            ><a href="https://minisite.airports.go.th/loei/home.php"
              >minisite.airports.go.th/loei</a
            >
          </p>
          <b-row class="justify-content-center">
            <b-col md="4" cols="12" class="pl-0">
              <div class="zoom-box text-center">
                <a
                  href="https://content.nokair.com/th/Booking/Where-we-fly/Flight-Service/Loei"
                  target="_blank"
                >
                  <img
                    src="/img/nokair.png"
                    class="icon"
                    width="150px"
                    height="150px"
                    style="cursor: pointer"
                  />
                </a>
              </div>
            </b-col>
            <b-col md="4" cols="12" class="pl-0">
              <div class="zoom-box text-center">
                <a
                  href="https://www.airasia.com/flights/th/th/from-bangkok-dmk-to-loei-loe"
                  target="_blank"
                >
                  <img
                    src="/img/airasia.png"
                    class="icon"
                    width="150px"
                    height="150px"
                    style="cursor: pointer"
                  />
                </a>
              </div>
            </b-col>
            <b-col md="4" cols="12" class="pl-0">
              <div class="zoom-box text-center">
                <a
                  href="https://www.thaismileair.com/th/%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%9A%E0%B8%B4%E0%B8%99-%E0%B9%84%E0%B8%9B-%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B8%A2
"
                  target="_blank"
                >
                  <img
                    src="/img/thaismile.png"
                    class="icon"
                    width="150px"
                    height="150px"
                    style="cursor: pointer"
                  />
                </a>
              </div>
            </b-col>
          </b-row>
        </b-tab>

        <b-tab>
          <template v-slot:title> <i class="fa fa-train"></i> รถไฟ </template>
          <p>
            จังหวัดเลยไม่มีสถานีรถไฟ
            นักท่องเที่ยวต้องเดินทางไปลงที่สถานีอุดรธานีและต่อรถโดยสารประจำทางไปจังหวัดเลยได้
            <br />
            <br />สอบถามตารางรถไฟได้ที่ หน่วยบริการเดินทาง การรถไฟแห่งประเทศไทย
            <br />
            <i class="fa fa-phone mr-2" aria-hidden="true"></i>
            <a href="tel:1690">1690</a>,
            <a
              href="tel:02-233
            7010"
              >02-2337010</a
            >, <a href="tel:02-2237020">02-2237020</a><br /><br />
            สถานีอุดรธานี <br /><i
              class="fa fa-phone mr-2"
              aria-hidden="true"
            ></i>
            <a href="tel:042-222061">042-222061</a>
          </p>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>
<script></script>
