import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const InfoBlock = ({ icon: Icon, title, items }) => (
  <div className='mb-4'>
    <div className="text-lg font-bold">
      <Icon className="inline-block mr-2" />
      {title}
    </div>
    {items.map((item, i) => <div key={i}>{item}</div>)}
  </div>
);

const MyFooter = () => (
  <div className="mx-auto max-w-5xl px-4 py-8 text-center bg-bg text-text">
    <div className="grid grid-cols-1 sm:grid-cols-3 pb-8 border-b-2 border-accent ">
      <InfoBlock
        icon={FaMapMarkerAlt}
        title="Tampere Lielahti"
        items={['Kauppakeskus Like', 'Antti Possin kuja 1']}
      />
      <InfoBlock
        icon={FaMapMarkerAlt}
        title="Pirkkala"
        items={['Kauppakeskus Veska', 'Saapastie 2']}
      />
      <InfoBlock
        icon={FaMapMarkerAlt}
        title="Tampere Keskusta"
        items={['Näsilinnankatu 46']}
      />
    </div>
    <div className="sm:flex justify-center pt-8 gap-12 ">
      <InfoBlock
        icon={FaPhone}
        title="Puhelin"
        items={["+358 41 5022 403"]}
      />
      <InfoBlock
        icon={FaEnvelope}
        title="Sähköposti"
        items={["sari_anne_@hotmail.com"]}
      />
    </div>
  </div>
);

export default MyFooter;
