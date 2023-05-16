"use client";
import React, { useState } from "react";
import EventObjectInput from "@fullcalendar/react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import {
  DateInput,
  DateSelectArg,
  EventApi,
  EventClickArg,
  formatDate,
} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "../lib/mui";
import { tokens } from "./Theme";

interface EventType {
  id: string;
  title: any;
}

export default function CalenderItem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvent, setCurrentEvent] = useState<EventType[] | EventApi[]>(
    []
  );

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr} - ${title} `,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEvent = (event: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ? '${event.view.title}'`
      )
    ) {
      event.event.remove();
    }
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        {/* Calender siderbar */}
        <Box
          sx={{
            flex: "1 1 20%",
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5"> Event</Typography>
          <List>
            {currentEvent.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0 ",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={<p>${event.title}</p>}
                  secondary={
                    <Typography>
                      {" "}
                      {formatDate(event.title, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            height="75vh"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEvent}
            eventsSet={(events: EventType[] | EventApi[]) =>
              setCurrentEvent(events)
            }
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </>
  );
}
