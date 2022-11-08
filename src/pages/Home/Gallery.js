import React from "react";
import Masonry from "react-responsive-masonry";

const images = [
  "https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/94160751_221314109297712_24617700273684480_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEiIhjqCft6ypyob8dWuimEXnWnZJIO3nZedadkkg7edlFXKB8xVQ2XM4zTvtodiUtGVWJOqfV4rxG5qBjQ6kMD&_nc_ohc=cOesmm7MCgQAX9FdGP8&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAV3MS6Cv6sn62TljV2RpQcB5gKEqW8kwxYRp0HLwNzTQ&oe=6391CB3C",

  "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/260692621_623613502401102_8280793439279119348_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEzx1vli1u-BLjeDTjbF0wmGKffaeCAN8QYp99p4IA3xAGO8c8F7O-MsE5GyEUjZidjpe3DuEH9QIjl5Izy-FRq&_nc_ohc=QYug2S_1VfkAX-cC6_b&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDehA_pPGnc8nXcoNHcXy4B5Y8bcgCqLVft1OIzq3g5sQ&oe=636EFBAB",
  //...
  "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/270226778_646146033481182_4719657517879852031_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHijrgn5PU-g2ZkKMgUOXj5rexuC2BiZlyt7G4LYGJmXKFuVsSZqQNx2cmw84eYKHTaxP7mPMk8yPIuCHe3fzLw&_nc_ohc=KKyv6e-CpzkAX-1IITg&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDPdjlDIoktO5hTlLpX7r28FmoeuGt0NT1Zv1FH1sAjVA&oe=636F3976",
  //...
  "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/278173256_714411403321311_4075672927355199956_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF_X1My8Sh4aJmX-e6m3vQNMYB419cCHKIxgHjX1wIcomkcOdIFQ4bzg2kK6RoRae0QWkLEdMoU5LwEC4ixXdvz&_nc_ohc=M6bwPCfJKGMAX_d6UYe&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDyaHAfxob5yyM4Lxbt7aSSlbXdpshDYg3QqIoQPgdLig&oe=636FFA07",
  //...
  "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/296888616_457626393039137_1267923904097062359_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHF60BOrUBsj3ByhJPPKX0PtqYxex6d8la2pjF7Hp3yVvALaeN7IAJtfjEF_NNxW1olmQX8F5ZXRpG-cdxPkSRO&_nc_ohc=1BhVsMJULfwAX8qG45n&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCtnBLQQjgI579Z4-rf_CE2-EyaNrFFBxNHVesaMkIPJA&oe=636FE20C",
  //...
  "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/240518094_562659445163175_1684063987474272948_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHaZSLMf_qfC8FajlpVPU-rVO_dUotJvS1U791Si0m9LcXWO0JPJQyoON8XmW_GnaKm1YjhIKrvTlsMzC8uAj83&_nc_ohc=4NnaZq5Nc7sAX9bKWQ2&_nc_ht=scontent.fdac24-2.fna&oh=00_AfAR9Wsm2x5anZJHdZtF985YF38XG746D3hpjAwSxeC-tQ&oe=636FA028",
  //...
  "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/270231996_646140903481695_7676877345041165341_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFSgAtdpB7OhmqTfsjS_dvGcmYijdFWQ2ByZiKN0VZDYA2wuIotEQSysOJGqAFo0QW1eGeo8Qw0n-v70qY612l2&_nc_ohc=QNaF14_eOBkAX_YCiTm&_nc_ht=scontent.fdac24-2.fna&oh=00_AfB7LEX30zYC4hxoz2ujilSd4KL2L4k1ZqNuJMD2RSpg4g&oe=636EFAAA",
  //...
  "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/289302054_755578115871306_3777886249738501999_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGY-cx4oCzemgO_5fYJGwofl4BVNpH4JRmXgFU2kfglGTLsu30ifaDExfBdj4AQ83nOlLteMxcxc9fiaCD2dXac&_nc_ohc=rfP-E4-_zF4AX9pmf8K&_nc_ht=scontent.fdac24-2.fna&oh=00_AfA-xq-nzy2SJcdcCnSotP_CCExcDz7cUUxV9rpMYuLxLg&oe=636FBFEF",
  //...
  "https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/204085671_523613922401061_6709832043556219362_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEWL_7csu-e3JisoXFW7n0JgTQaeL26IICBNBp4vboggGR05gaBArkyrcDcv1mhFv4XRVI8eB9KzUICtFeF7Z7s&_nc_ohc=HNl5jM-88FgAX_Xx9Pw&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDnT7K4EVfITtSi8B7pm2J7sv-OqMutVEMwPrc2urtCjQ&oe=6391EE0B",
];

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <Masonry className=" px-12" columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            alt=""
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
