import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { BookingModule } from './booking/booking.module';
import { AdminModule } from './admin/admin.module';
import { VenueModule } from './venue/venue.module';
import { CostumerCardModule } from './costumer_card/costumer_card.module';
import { CostumerModule } from './costumer/costumer.module';
import { CostumerAddressModule } from './costumer_address/costumer_address.module';
import { TicketModule } from './ticket/ticket.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { EventTypeModule } from './event_type/event_type.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { StatusModule } from './status/status.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { Admin } from './admin/admin.model';
import { CartModule } from './cart/cart.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
// import { AuthModule } from './auth/auth.module';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { DiscountCouponModule } from './discount_coupon/discount_coupon.module';
import { CountryModule } from './country/country.module';
import { LanguageModule } from './language/language.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { FlatModule } from './flat/flat.module';
import { GenderModule } from './gender/gender.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Admin ],
      autoLoadModels: true,
      logging: false,
    }),
    EventsModule,
    VenueModule,
    AdminModule,
    // AuthModule,
    BookingModule,
    CartModule,
    CostumerCardModule,
    CostumerModule,
    CostumerAddressModule,
    TicketModule,
    SeatModule,
    SeatTypeModule,
    EventTypeModule,
    HumanCategoryModule,
    VenueTypeModule,
    VenuePhotoModule,
    StatusModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    TicketTypeModule,
    DiscountCouponModule,
    CountryModule,
    LanguageModule,
    RegionModule,
    DistrictModule,
    FlatModule,
    GenderModule,
  ],
})
export class AppModule {}
