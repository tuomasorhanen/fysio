import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const MyFooter = () => {
  return (
      <div className="mx-auto max-w-5xl px-4 py-8 text-center bg-bg text-text">
        <div className="grid grid-cols-1 sm:grid-cols-3 pb-8 border-b-2 border-accent ">
          <div className='mb-4'>
            <h3 className="text-lg font-bold "><FaMapMarkerAlt className="inline-block mr-2" />Tampere Lielahti</h3>
            <p>Kauppakeskus Like</p>
            <p>Antti Possin kuja 1</p>
          </div>
          <div className='mb-4'>
            <h3 className="text-lg font-bold"><FaMapMarkerAlt className="inline-block mr-2" />Pirkkala</h3>
            <p>Kauppakeskus Veska</p>
            <p>Saapastie 2</p>
          </div>
          <div className='mb-4'>
            <h3 className="text-lg font-bold"><FaMapMarkerAlt className="inline-block mr-2" />Tampere Keskusta</h3>
            <p>Näsilinnankatu 46</p>
          </div>
          </div>
          <div className="sm:flex justify-center pt-8 ">
          <div className='mx-8 mb-4'>
            <h3 className="text-lg font-bold "><FaPhone className="inline-block mr-2" />Puhelin</h3>
            <p>+358 41 5022 403</p>
          </div>
          <div className='mx-8 mb-4'>
            <h3 className="text-lg font-bold "><FaEnvelope className="inline-block mr-2" />Sähköposti</h3>
            <p>sarianne@gmail.com</p>
          </div>
        </div>
      </div>
    );
};

export default MyFooter;
