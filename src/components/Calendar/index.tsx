import React from 'react';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import {Feather} from '@expo/vector-icons'
import {
    Container
} from './styles';
import theme from '../../global/styles/theme';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', ],
  today: 'Hoje',
}
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
  return (
    <Container>
      <CustomCalendar
        renderArrow={(direction) =>
          <Feather
            size={24}
            color={theme.colors.text}
            name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
          />
        }
        headerStyle={{
          backgroundColor: theme.colors.background_secondary,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.text_detail,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_500,
          textMonthFontFamily: theme.fonts.secondary_600,
          textDayHeaderFontSize: 10,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.title,
          arrowStyle: {
            marginHorizontal: 15,
          }
        }}
        firstDay={1}
        minDate={new Date()}
      />
    </Container>
  );
}
