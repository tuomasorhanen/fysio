import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const MyFooter = () => {
  return (
      <div className="mx-auto max-w-5xl px-4 py-8 text-center bg-bg text-text">
        <div className="grid grid-cols-1 sm:grid-cols-3 pb-8 border-b-2 border-accent ">
          <div className='mb-4'>
            <div className="text-lg font-bold "><FaMapMarkerAlt className="inline-block mr-2" />Tampere Lielahti</div>
            <div>Kauppakeskus Like</div>
            <p>Antti Possin kuja 1</p>
          </div>
          <div className='mb-4'>
            <div className="text-lg font-bold"><FaMapMarkerAlt className="inline-block mr-2" />Pirkkala</div>
            <div>Kauppakeskus Veska</div>
            <div>Saapastie 2</div>
          </div>
          <div className='mb-4'>
            <div className="text-lg font-bold"><FaMapMarkerAlt className="inline-block mr-2" />Tampere Keskusta</div>
            <div>Näsilinnankatu 46</div>
          </div>
          </div>
          <div className="sm:flex justify-center pt-8 ">
          <div className='mx-8 mb-4'>
            <div className="text-lg font-bold "><FaPhone className="inline-block mr-2" />Puhelin</div>
            <div>+358 41 5022 403</div>
          </div>
          <div className='mx-8 mb-4'>
            <div className="text-lg font-bold "><FaEnvelope className="inline-block mr-2" />Sähköposti</div>
            <div>sari_anne_@hotmail.com</div>
          </div>
        </div>
      </div>
    );
};

export default MyFooter;
