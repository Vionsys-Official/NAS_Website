import React from 'react'
import FieldSec2 from '@/app/ui/industries/fieldService/fieldSec2';
import FieldSec3 from '@/app/ui/industries/fieldService/fieldSec3';
import FieldSec4 from '@/app/ui/industries/fieldService/fieldSec4';
import FieldSec1 from '@/app/ui/industries/fieldService/fieldSec1';

export const metadata = {
    title: "Field Service",
  };

const fildService = () => {

    return (
        <main id='mission' className='overflow-hidden'>

            <FieldSec1 />

            <FieldSec2 />

            <FieldSec3 />

            <FieldSec4 />

        </main>
    )
}

export default fildService