import { FaEnvelope, FaMapMarkerAlt,FaPhone } from 'react-icons/fa';

const InfoBlock = ({ icon: Icon, title, items }) => (
  <div className="mb-4">
    <div className="text-lg font-bold">
      <Icon className="mr-2 inline-block" />
      {title}
    </div>
    {items.map((item, i) => (
      <div key={i}>{item}</div>
    ))}
  </div>
);

const MyFooter = () => (
  <section className="mx-auto max-w-5xl bg-bg px-4 py-8 text-center text-text">
    <div className="grid grid-cols-1 border-b-2 border-accent pb-8 sm:grid-cols-3 ">
      <InfoBlock icon={FaMapMarkerAlt} title="Tampere Lielahti" items={['Kauppakeskus Like', 'Antti Possin kuja 1']} />
      <InfoBlock icon={FaMapMarkerAlt} title="Pirkkala" items={['Kauppakeskus Veska', 'Saapastie 2']} />
      <InfoBlock icon={FaMapMarkerAlt} title="Tampere Keskusta" items={['Näsilinnankatu 46']} />
    </div>
    <div className="justify-center gap-12 pt-8 sm:flex ">
      <InfoBlock icon={FaPhone} title="Puhelin" items={['+358 41 5022 403']} />
      <InfoBlock icon={FaEnvelope} title="Sähköposti" items={['sari_anne_@hotmail.com']} />
    </div>
  </section>
);

export default MyFooter;
