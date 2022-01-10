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
            ระยะทางจากตัวเมืองเลยไปยังอำเภอ
            <br />• อำเภอวังสะพุง 22 กิโลเมตร <br />• อำเภอนาด้วง 37 กิโลเมตร
            <br />• อำเภอท่าลี่ 46 กิโลเมตร <br />• อำเภอเชียงคาน 48 กิโลเมตร
            <br />• อำเภอภูเรือ 49 กิโลเมตร <br />• อำเภอภูหลวง 50 กิโลเมตร
            <br />• อำเภอภูกระดึง 74 กิโลเมตร <br />• อำเภอด่านซ้าย 82 กิโลเมตร
            <br />• อำเภอปากชม 92 กิโลเมตร <br />• อำเภอผาขาว 112 กิโลเมตร
            <br />• อำเภอนาแห้ว 117 กิโลเมตร
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
            <i class="fas fa-car-side"></i> รถเช่า
          </template>
          <b-table
            hover
            :items="result"
            :fields="fields"
            responsive
            small
            id="rent-list"
            :per-page="perPage"
            :current-page="currentPage"
            style="width: 100%"
          >
            <template v-slot:cell(location)="data">
              <span>{{ data.item.location }} </span></template
            >

            <template v-slot:cell(phone)="data">
              <span v-if="data.item.phone">
                <a :href="'tel:' + data.item.phone">{{
                  data.item.phone
                }}</a></span
              ></template
            >

            <template v-slot:cell(btn)="data">
              <span>
                <a
                  :href="data.item.url ? data.item.url : '#'"
                  :target="data.item.url && '_blank'"
                  ><b-button
                    variant="info"
                    class="m-1"
                    :disabled="!data.item.url"
                    ><i class="fa fa-link"/></b-button
                ></a>
              </span>
              <span>
                <a
                  :href="
                    `http://maps.apple.com/maps?q=${data.item.lat},${data.item.lon}`
                  "
                  target="_blank"
                >
                  <b-button variant="outline-info" class="m-1"
                    ><i class="fa fa-map-marker"/></b-button></a></span
            ></template>
          </b-table>
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
          <template v-slot:title>
            <i class="fa fa-exclamation-circle"></i> ติดต่อฉุกเฉิน
          </template>
          <b-table
            hover
            :items="result"
            :fields="fields"
            responsive
            small
            id="emergency-list"
            :per-page="perPage"
            :current-page="currentPage"
            style="width: 100%"
          >
            <template v-slot:cell(location)="data">
              <span>{{ data.item.location }} </span></template
            >

            <template v-slot:cell(phone)="data">
              <span v-if="data.item.phone">
                <a :href="'tel:' + data.item.phone">{{
                  data.item.phone
                }}</a></span
              ></template
            >
          </b-table>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "transportations",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "ชื่อ",
          class: "text-left align-middle w-180",
          stickyColumn: true,
        },
        {
          key: "location",
          label: "สถานที่ตั้ง",
          class: "text-left align-middle w-180",
        },
        {
          key: "phone",
          label: "เบอร์ติดต่อ",
          class: "text-left align-middle w-180",
        },
        {
          key: "btn",
          label: "",
          class: "text-left align-middle w-180",
        },
      ],
      fields2: [
        {
          key: "name",
          label: "ชื่อ",
          class: "text-left align-middle w-180",
          stickyColumn: true,
        },
        {
          key: "phone",
          label: "เบอร์ติดต่อ",
          class: "text-left align-middle w-180",
        },
      ],
      result2: [
        {
          name: "การท่องเที่ยวแห่งประเทศไทย สำนักงานเลย",
          phone: "0 4281 2812, 0 4281 1405",
        },
        {
          name: "สำนักงานจังหวัดเลย",
          phone: "0 4283 3209",
        },
        {
          name: "ประชาสัมพันธ์จังหวัดเลย",
          phone: "0 4281 1258",
        },
        {
          name: "เทศบาลเมืองเลย",
          phone: "0 4281 1324",
        },
        {
          name: "สถานีขนส่งจังหวัดเลย",
          phone: "0 4283 3586",
        },
        {
          name: "กู้ภัย มูลนิธิสว่างคีรีธรรม จ.เลย",
          phone: "0 4281 2094",
        },
        {
          name: "สายด่วนการไฟฟ้า จังหวัดเลย",
          phone: "0 4281 1202,  0 4281 1356",
        },
        {
          name: "แจ้งเหตุกระแสไฟฟ้าขัดข้อง",
          phone: "0 4281 1888",
        },
        {
          name: "ตำรวจภูธรจังหวัดเลย",
          phone: "0 4281 3017",
        },
        {
          name: "สถานีตำรวจภูธรเมืองเลย",
          phone: "0 4281 1254",
        },
        {
          name: "สถานีตำรวจภูธรด่านซ้าย",
          phone: "0 4289 1310",
        },
        {
          name: "สถานีตำรวจภูธรเชียงคาน",
          phone: "0-4282-1181",
        },
        {
          name: "สถานีตำรวจภูธรภูเรือ",
          phone: "0 4289 9090",
        },
        {
          name: "สถานีตำรวจภูธรท่าลี่",
          phone: "0 4288 9038",
        },
        {
          name: "สถานีตำรวจภูธรวังสะพุง",
          phone: "0 4284 1245",
        },
        {
          name: "สถานีตำรวจภูธรภูหลวง",
          phone: "0 4287 9074",
        },
        {
          name: "สถานีตำรวจภูธรอำเภอภูกระดึง",
          phone: "0 4287 1024",
        },
        {
          name: "สถานีตำรวจภูธรหนองหิน",
          phone: "0 4285 2091",
        },
        {
          name: "สถานีตำรวจท่องเที่ยว 6 (เลย)",
          phone: "0 4286 1164",
        },
        {
          name: "สำนักงานสาธารณสุขจังหวัดเลย",
          phone: "08 1708 3113",
        },
        {
          name: "โรงพยาบาลเลย",
          phone: "0 4286 2123",
        },
        {
          name: "โรงพยาบาลจิตเวชเลยราชนครินทร์",
          phone: "0 4280 8100",
        },
        {
          name: "โรงพยาบาลเมืองเลย ราม",
          phone: "0 4287 0000",
        },
        {
          name: "โรงพยาบาลสมเด็จพระยุพราช",
          phone: "0 4289 1314",
        },
        {
          name: "โรงพยาบาลวังสะพุง",
          phone: "0 4284 1101",
        },
        {
          name: "โรงพยาบาลเชียงคาน",
          phone: "0 4282 2181",
        },
        {
          name: "โรงพยาบาลภูกระดึง",
          phone: "0 4287 1016-7",
        },
        {
          name: "รงพยาบาลทําลี่",
          phone: "0 4288 9035",
        },
        {
          name: "โรงพยาบาลภูเรือ",
          phone: "0 4289 9072",
        },
        {
          name: "โรงพยาบาลผาขาว",
          phone: "0 4281 8101-2",
        },
        {
          name: "โรงพยาบาลภูหลวง",
          phone: "0 4287 9101",
        },
        {
          name: "โรงพยาบาลหนองหิน",
          phone: "0 4285 2214",
        },
      ],
      result: [
        {
          name: "เมืองเลยรถเช่า",
          location:
            "เลขที่ 38 หมู่ 6 หมู่บ้าน ท่าอากาศยานเลย ตำบล นาอาน อำเภอ เมืองเลย",
          phone: "08 9276 0950",
          url: "https://www.facebook.com/CARRENTLOEI",
          lat: "17.445684567276",
          lon: "101.726838920805",
        },
        {
          name: "เมืองเลยรถเช่า โดย คุณกร",
          location:
            "เลขที่ 38 หมู่ 6 หมู่บ้าน ท่าอากาศยานเลย ตำบล นาอาน อำเภอ เมืองเลย",
          phone: "08 9710 7768",
          url:
            "https://www.facebook.com/%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%81%E0%B8%A3-2315857558453296/",
          lat: "17.44571548471",
          lon: "101.726852582489",
        },
        {
          name: "วรรณิศารถเช่า (ส.เมืองเลยรถเช่า)",
          location:
            "เลขที่ 38 หมู่ 6 หมู่บ้าน ท่าอากาศยานเลย ตำบล นาอาน อำเภอ เมืองเลย",
          phone: "09 0841 3990",
          url: "https://www.facebook.com/s.carrent/",
          lat: "17.4455265592992",
          lon: "101.726996500515",
        },
        {
          name: "ภูพานรถเช่า เมืองเลย",
          location:
            "เลขที่ 38 หมู่ 6 หมู่บ้าน ท่าอากาศยานเลย ตำบล นาอาน อำเภอ เมืองเลย",
          phone: "09 2889 9453",
          url: "",
          lat: "17.4456815802027",
          lon: "101.726841853632",
        },
        {
          name: "เลยรถเช่า",
          location: "เลขที่ 99/9 ร่วมใจ ซอย 4 ตำบล กุดป่อง อำเภอ เมืองเลย",
          phone: "08 2559 8151",
          url: "https://www.facebook.com/loeicarrental",
          lat: "17.4910871941545",
          lon: "101.727589085771",
        },
      ],
    };
  },
};
</script>
